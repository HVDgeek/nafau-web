import { gql } from '@apollo/client'

export const AulaFragment = gql`
  fragment AulaFragment on Aulas {
    id
    title
    description
    created_at
    updated_at
    arquivo {
      id
      name
      description
      url
      files {
        url
      }
    }
    links {
      id
      title
      url
      description
    }
    video {
      id
      title
      description
      url
    }
    audio {
      id
      title
      description
      url
    }
  }
`
