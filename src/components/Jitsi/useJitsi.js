import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useJitsi = ({
  domain = 'meet.jit.si',
  parentNode,
  subject,
  password,
  displayName,
  onMeetingEnd,
  ...options
}) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [jitsi, setJitsi] = useState(null)

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) {
      setError(
        'JitsiMeetExternalAPI is not available, check if https://meet.jit.si/external_api.js was loaded'
      )
      return
    }

    options.parentNode = document.getElementById(parentNode)
    if (!options.parentNode) {
      setError(
        `Parent node is not available, check container have the correct id: "${parentNode}"`
      )
      return
    }

    const myOverwrite = {
      SHOW_PROMOTIONAL_CLOSE_PAGE: false,
      TOOLBAR_BUTTONS: [
        'microphone',
        'camera',
        // 'closedcaptions',
        'desktop',
        'fullscreen',
        'chat',
        'participants-pane',
        // 'fodeviceselection',
        'hangup',
        // 'profile',
        // 'recording',
        // 'livestreaming',
        // 'etherpad',
        // 'sharedvideo',
        // 'settings',
        'raisehand',
        // 'videoquality',
        // 'filmstrip',
        // 'invite',
        // 'feedback',
        // 'stats',
        // 'shortcuts',
        'tileview'
        // 'videobackgroundblur',
        // 'download',
        // 'help',
        // 'mute-everyone',
        // 'security'
      ]
    }

    const client = new window.JitsiMeetExternalAPI(domain, {
      ...options,
      configOverwrite: {
        enableClosePage: false,
        prejoinPageEnabled: false,
        enableNoAudioDetection: true,
        enableNoisyMicDetection: true,
        startAudioMuted: 3,
        startWithVideoMuted: true,
        requireDisplayName: false,
        defaultLanguage: 'pt'
      },
      interfaceConfigOverwrite: myOverwrite
    })
    setJitsi(client)
    setLoading(false)
    setError(null)

    subject && client.executeCommand('subject', subject)

    client.addEventListener('videoConferenceJoined', () => {
      password && client.executeCommand('password', password)
      displayName && client.executeCommand('displayName', displayName)
    })

    client.addEventListener('passwordRequired', () => {
      password && client.executeCommand('password', password)
    })
    onMeetingEnd && client.addEventListener('readyToClose', onMeetingEnd)

    return () => jitsi && jitsi.dispose()
  }, [])

  return { jitsi, error, loading }
}

useJitsi.propTypes = {
  options: PropTypes.shape({
    domain: PropTypes.string,
    roomName: PropTypes.string.isRequired,
    subject: PropTypes.string,
    password: PropTypes.string,
    displayName: PropTypes.string,
    onMeetingEnd: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string,
    parentNode: PropTypes.string,
    configOverwrite: PropTypes.object,
    interfaceConfigOverwrite: PropTypes.object,
    noSSL: PropTypes.bool,
    jwt: PropTypes.string,
    onload: PropTypes.func,
    invitees: PropTypes.array,
    devices: PropTypes.object,
    userInfo: PropTypes.object
  })
}

export default useJitsi
