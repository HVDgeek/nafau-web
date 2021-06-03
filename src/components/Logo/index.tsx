import { Box } from '@chakra-ui/react'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

const Logo = ({
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => {
  return (
    <Box color={color} width={[20, size === 'normal' ? 40 : 60]}>
      <svg viewBox="0 0 223 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        {!hideOnMobile && (
          <path
            d="M89.06 55.74h-6.094V41.676c0-.797-.14-1.508-.422-2.133a4.817 4.817 0 00-1.102-1.64 4.673 4.673 0 00-1.664-1.032 5.44 5.44 0 00-2.039-.375H67.075v19.242h-6.094V33.427c0-.422.079-.813.235-1.172.156-.375.375-.696.656-.961a3.075 3.075 0 012.18-.89h13.734c.766 0 1.57.085 2.414.257.86.172 1.703.453 2.531.844.844.375 1.641.86 2.391 1.453a9.062 9.062 0 012.016 2.133c.593.828 1.062 1.789 1.406 2.883.344 1.093.516 2.328.516 3.703v14.062zm31.5-8.392c0 .844-.149 1.758-.446 2.743a8.2 8.2 0 01-1.453 2.718c-.656.829-1.523 1.524-2.601 2.086-1.063.563-2.36.844-3.891.844h-10.992c-.844 0-1.758-.148-2.742-.445a8.428 8.428 0 01-2.72-1.43c-.827-.672-1.523-1.539-2.085-2.601-.563-1.079-.844-2.383-.844-3.914 0-.844.149-1.758.445-2.743a8.12 8.12 0 011.43-2.718c.672-.844 1.54-1.547 2.602-2.11 1.078-.562 2.382-.844 3.914-.844h10.992v5.813h-10.992c-.828 0-1.469.258-1.922.773-.453.5-.68 1.125-.68 1.875 0 .797.258 1.422.774 1.875.53.438 1.156.657 1.875.657h10.945c.828 0 1.469-.25 1.922-.75.453-.5.68-1.125.68-1.875v-8.508c0-.797-.25-1.43-.75-1.899-.485-.468-1.102-.703-1.852-.703H98.786v-5.789h13.383c.844 0 1.75.149 2.719.446a7.91 7.91 0 012.718 1.453c.844.656 1.547 1.523 2.11 2.601.562 1.063.844 2.36.844 3.89v8.556zm27.632-10.851h-13.781v-6.094h13.781v6.094zm0-10.992h-13.734c-.828 0-1.453.21-1.875.633-.422.406-.633 1.007-.633 1.804V55.74h-6.094V27.942c0-1.047.133-1.984.399-2.812a8.07 8.07 0 011.055-2.18 7.27 7.27 0 011.546-1.617 8.766 8.766 0 011.805-1.102 9.127 9.127 0 011.922-.61c.641-.14 1.25-.21 1.828-.21h13.781v6.094zm28.196 21.844c0 .843-.149 1.757-.446 2.742a8.182 8.182 0 01-1.453 2.718c-.656.829-1.523 1.524-2.601 2.086-1.063.563-2.36.844-3.891.844h-10.992c-.844 0-1.758-.148-2.742-.445a8.429 8.429 0 01-2.719-1.43c-.828-.672-1.523-1.539-2.086-2.601-.562-1.079-.844-2.383-.844-3.914 0-.844.149-1.758.446-2.743a8.107 8.107 0 011.429-2.718c.672-.844 1.539-1.547 2.602-2.11 1.078-.562 2.383-.844 3.914-.844h10.992v5.813h-10.992c-.828 0-1.469.258-1.922.773-.453.5-.68 1.125-.68 1.875 0 .797.258 1.422.774 1.875.531.438 1.156.657 1.875.657h10.945c.828 0 1.469-.25 1.922-.75.453-.5.68-1.125.68-1.875v-8.508c0-.797-.25-1.43-.75-1.899-.485-.468-1.102-.703-1.852-.703h-13.383v-5.789h13.383c.844 0 1.75.149 2.719.446.984.296 1.89.78 2.719 1.453.843.656 1.546 1.523 2.109 2.601.562 1.063.844 2.36.844 3.89v8.556zm32.906 5.32c0 .437-.078.844-.234 1.219a2.933 2.933 0 01-1.618 1.617c-.359.156-.75.234-1.171.234h-13.782c-.75 0-1.554-.086-2.414-.258a11.775 11.775 0 01-2.508-.82 14.385 14.385 0 01-2.414-1.453 9.722 9.722 0 01-2.015-2.133c-.578-.844-1.047-1.812-1.407-2.906-.343-1.094-.515-2.328-.515-3.703V30.403h6.094v14.063c0 .797.132 1.515.398 2.156a5.17 5.17 0 001.125 1.617 5.016 5.016 0 001.641 1.055c.64.234 1.328.351 2.062.351H203.2V30.403h6.094V52.67zM62.47 64.247V66h-1.026v-4.977h1.942c.373 0 .702.069.984.205.285.137.504.332.656.585.153.25.23.537.23.858 0 .487-.168.873-.503 1.155-.333.28-.794.42-1.384.42h-.9zm0-.831h.916c.27 0 .477-.064.618-.191.144-.128.216-.31.216-.547 0-.244-.072-.441-.216-.592-.143-.15-.341-.227-.594-.232h-.94v1.562zM66.94 66h-.99v-5.25h.99V66zm2.96 0a1.097 1.097 0 01-.099-.332c-.239.267-.55.4-.933.4-.362 0-.663-.105-.902-.314a1.013 1.013 0 01-.356-.793c0-.392.145-.693.434-.902.292-.21.713-.316 1.262-.318h.454v-.212a.604.604 0 00-.133-.41c-.087-.103-.224-.154-.414-.154a.595.595 0 00-.393.12.409.409 0 00-.14.328h-.988c0-.215.067-.413.199-.595a1.3 1.3 0 01.56-.427c.242-.105.513-.158.814-.158.455 0 .817.116 1.083.346.269.227.403.549.403.963v1.603c.003.351.052.617.147.797V66H69.9zm-.817-.687c.146 0 .28-.032.404-.096a.65.65 0 00.273-.263v-.636h-.369c-.494 0-.758.171-.79.513l-.003.058c0 .123.043.225.13.304.087.08.205.12.356.12zm3.61-3.92v.909h.632v.724h-.632v1.846c0 .137.026.235.079.294.052.06.152.089.3.089.11 0 .206-.008.29-.024v.749c-.193.059-.392.088-.597.088-.693 0-1.046-.35-1.06-1.049v-1.993h-.54v-.724h.54v-.91h.988zM76.019 66a1.096 1.096 0 01-.1-.332c-.239.267-.55.4-.933.4-.362 0-.663-.105-.902-.314a1.013 1.013 0 01-.356-.793c0-.392.145-.693.435-.902.291-.21.712-.316 1.26-.318h.455v-.212a.604.604 0 00-.133-.41c-.087-.103-.224-.154-.413-.154a.595.595 0 00-.393.12.409.409 0 00-.14.328h-.989c0-.215.067-.413.199-.595a1.3 1.3 0 01.56-.427c.242-.105.513-.158.814-.158.456 0 .817.116 1.083.346.27.227.404.549.404.963v1.603c.002.351.05.617.147.797V66h-.998zm-.817-.687c.145 0 .28-.032.403-.096a.65.65 0 00.273-.263v-.636h-.369c-.494 0-.757.171-.79.513l-.003.058c0 .123.044.225.13.304.087.08.205.12.356.12zm2.696.687v-2.974h-.55v-.724h.55v-.315c0-.414.119-.736.356-.964.24-.23.573-.345 1.001-.345.137 0 .305.023.503.069l-.01.765a1.26 1.26 0 00-.301-.03c-.372 0-.557.174-.557.522v.298h.734v.724h-.734V66h-.992zm2.085-1.883c0-.367.071-.694.212-.981.142-.287.344-.51.609-.667a1.79 1.79 0 01.926-.236c.499 0 .906.153 1.22.458.317.306.493.72.53 1.244l.007.254c0 .567-.158 1.023-.475 1.367-.317.341-.742.512-1.275.512-.533 0-.96-.17-1.278-.512-.317-.342-.476-.807-.476-1.395v-.044zm.988.072c0 .35.066.62.198.806a.656.656 0 00.568.277c.24 0 .426-.091.56-.273.135-.185.202-.479.202-.882 0-.344-.067-.611-.202-.8a.656.656 0 00-.567-.284.644.644 0 00-.56.284c-.133.187-.199.477-.199.872zm5.202-.961a2.687 2.687 0 00-.355-.027c-.374 0-.619.126-.735.38V66h-.988v-3.698h.933l.028.44c.198-.339.472-.509.823-.509.11 0 .212.015.308.045l-.014.95zm1.405-.926l.03.413c.263-.321.617-.482 1.064-.482.476 0 .803.188.98.564.26-.376.63-.564 1.112-.564.4 0 .7.118.895.352.196.233.294.584.294 1.053V66h-.991v-2.358c0-.21-.041-.363-.123-.458-.082-.098-.227-.147-.434-.147-.296 0-.502.14-.615.423l.003 2.54h-.988v-2.355c0-.214-.042-.37-.126-.465-.085-.096-.228-.143-.431-.143-.28 0-.483.116-.608.348V66h-.988v-3.698h.926zM94.858 66a1.097 1.097 0 01-.099-.332c-.239.267-.55.4-.933.4-.362 0-.663-.105-.902-.314a1.013 1.013 0 01-.356-.793c0-.392.145-.693.434-.902.292-.21.713-.316 1.262-.318h.454v-.212a.604.604 0 00-.133-.41c-.087-.103-.224-.154-.414-.154a.595.595 0 00-.393.12.409.409 0 00-.14.328h-.988c0-.215.066-.413.199-.595a1.3 1.3 0 01.56-.427c.242-.105.513-.158.814-.158.455 0 .817.116 1.083.346.269.227.404.549.404.963v1.603c.002.351.05.617.146.797V66h-.998zm-.817-.687c.146 0 .28-.032.404-.096a.65.65 0 00.273-.263v-.636h-.369c-.494 0-.758.171-.79.513l-.003.058c0 .123.043.225.13.304.087.08.205.12.355.12zm4.017-1.19c0-.576.128-1.035.386-1.377.26-.342.614-.513 1.063-.513.36 0 .657.135.892.404V60.75h.991V66h-.892l-.048-.393a1.162 1.162 0 01-.95.461c-.435 0-.785-.17-1.05-.512-.261-.344-.392-.822-.392-1.432zm.987.072c0 .347.06.612.182.797a.59.59 0 00.526.277c.305 0 .521-.13.646-.387v-1.46c-.123-.257-.336-.385-.64-.385-.475 0-.714.386-.714 1.158zm4.813 1.873c-.542 0-.984-.166-1.326-.499-.34-.332-.51-.776-.51-1.33v-.095c0-.371.072-.703.216-.995.143-.294.346-.52.608-.676.265-.16.565-.24.903-.24.505 0 .903.16 1.192.479.292.319.438.771.438 1.357v.403h-2.355a.924.924 0 00.287.581.88.88 0 00.612.219c.38 0 .678-.138.892-.414l.485.544c-.148.21-.348.374-.601.492a1.989 1.989 0 01-.841.174zm-.113-3.035a.623.623 0 00-.478.198c-.121.133-.199.322-.233.568h1.374v-.079c-.004-.218-.064-.387-.178-.506-.113-.12-.275-.18-.485-.18zm7 .81h-1.969v1.333h2.311V66h-3.336v-4.977h3.329v.831h-2.304v1.186h1.969v.803zm1.788-1.541l.03.427c.265-.33.619-.496 1.063-.496.392 0 .684.116.875.346.192.23.29.574.294 1.032V66h-.987v-2.365c0-.21-.046-.361-.137-.455-.091-.096-.243-.143-.455-.143a.679.679 0 00-.625.355V66h-.988v-3.698h.93zm5.017 2.676c0-.12-.06-.215-.181-.284-.118-.07-.31-.133-.574-.188-.88-.184-1.319-.558-1.319-1.12 0-.329.135-.602.406-.821.274-.221.63-.332 1.07-.332.47 0 .844.11 1.125.332.282.221.423.508.423.861h-.987a.473.473 0 00-.137-.348c-.091-.094-.234-.14-.427-.14-.167 0-.295.037-.387.112a.356.356 0 00-.136.287c0 .11.051.199.154.267.104.066.28.124.526.174.246.048.453.103.622.164.522.192.783.523.783.995 0 .337-.145.61-.434.82-.29.208-.663.311-1.121.311a1.99 1.99 0 01-.828-.164 1.41 1.41 0 01-.564-.454 1.069 1.069 0 01-.205-.626h.937c.009.176.074.31.195.404.12.093.282.14.485.14.189 0 .332-.036.427-.106a.338.338 0 00.147-.284zM120.192 66h-.991v-3.698h.991V66zm-1.049-4.655a.49.49 0 01.147-.366.565.565 0 01.407-.144.56.56 0 01.403.144c.1.096.15.218.15.366 0 .15-.051.273-.153.369a.557.557 0 01-.4.143.569.569 0 01-.404-.143.488.488 0 01-.15-.37zm2.775.957l.031.427c.265-.33.619-.496 1.063-.496.392 0 .684.116.875.346.192.23.29.574.294 1.032V66h-.988v-2.365c0-.21-.045-.361-.136-.455-.092-.096-.243-.143-.455-.143a.679.679 0 00-.625.355V66h-.988v-3.698h.929zm2.861 1.815c0-.367.071-.694.212-.981a1.55 1.55 0 01.609-.667c.266-.157.575-.236.926-.236.499 0 .906.153 1.22.458.317.306.493.72.53 1.244l.007.254c0 .567-.159 1.023-.475 1.367-.317.341-.742.512-1.275.512-.533 0-.96-.17-1.279-.512-.316-.342-.475-.807-.475-1.395v-.044zm.988.072c0 .35.066.62.198.806a.657.657 0 00.568.277.656.656 0 00.56-.273c.135-.185.202-.479.202-.882 0-.344-.067-.611-.202-.8a.654.654 0 00-.567-.284.644.644 0 00-.561.284c-.132.187-.198.477-.198.872zm6.569 1.88c-.542 0-.984-.167-1.326-.5-.339-.332-.509-.776-.509-1.33v-.095c0-.371.072-.703.215-.995.144-.294.347-.52.609-.676.264-.16.565-.24.902-.24.506 0 .904.16 1.193.479.292.319.437.771.437 1.357v.403h-2.355a.92.92 0 00.288.581.876.876 0 00.611.219c.381 0 .678-.138.892-.414l.486.544c-.148.21-.349.374-.602.492a1.989 1.989 0 01-.841.174zm-.112-3.036a.625.625 0 00-.479.198c-.121.133-.198.322-.232.568h1.374v-.079c-.005-.218-.064-.387-.178-.506-.114-.12-.276-.18-.485-.18zm6.815 1.942h-1.798L136.899 66h-1.09l1.853-4.977h.95L140.475 66h-1.091l-.345-1.025zm-1.521-.831h1.244l-.625-1.863-.619 1.863zm6.522.041c0 .57-.13 1.027-.39 1.37a1.241 1.241 0 01-1.046.513c-.374 0-.676-.13-.906-.39v1.744h-.988v-5.12h.916l.035.362a1.16 1.16 0 01.936-.43c.456 0 .81.168 1.063.505.253.338.38.802.38 1.395v.051zm-.988-.072c0-.344-.062-.61-.185-.796a.591.591 0 00-.53-.28c-.309 0-.523.118-.639.355v1.514c.121.244.336.366.646.366.472 0 .708-.386.708-1.159zm3.681-.885a2.696 2.696 0 00-.356-.027c-.373 0-.618.126-.734.38V66h-.988v-3.698h.933l.027.44c.198-.339.473-.509.824-.509.109 0 .212.015.308.045l-.014.95zm2.112 2.84c-.542 0-.984-.166-1.326-.499-.339-.332-.509-.776-.509-1.33v-.095c0-.371.072-.703.215-.995.144-.294.346-.52.608-.676.265-.16.566-.24.903-.24.506 0 .903.16 1.193.479.291.319.437.771.437 1.357v.403h-2.355a.924.924 0 00.287.581.88.88 0 00.612.219c.381 0 .678-.138.892-.414l.486.544c-.149.21-.349.374-.602.492a1.989 1.989 0 01-.841.174zm-.113-3.035a.623.623 0 00-.478.198c-.121.133-.198.322-.233.568h1.375v-.079c-.005-.218-.064-.387-.178-.506-.114-.12-.276-.18-.486-.18zm3.107-.731l.031.427c.264-.33.619-.496 1.063-.496.392 0 .684.116.875.346.192.23.289.574.294 1.032V66h-.988v-2.365c0-.21-.045-.361-.136-.455-.092-.096-.243-.143-.455-.143a.68.68 0 00-.626.355V66h-.987v-3.698h.929zm2.861 1.822c0-.577.129-1.036.386-1.378.26-.342.615-.513 1.063-.513.36 0 .658.135.893.404V60.75h.991V66h-.892l-.048-.393a1.162 1.162 0 01-.95.461c-.436 0-.785-.17-1.05-.512-.262-.344-.393-.822-.393-1.432zm.988.071c0 .347.06.612.181.797a.59.59 0 00.527.277c.305 0 .52-.13.646-.387v-1.46c-.124-.257-.337-.385-.64-.385-.476 0-.714.386-.714 1.158zM159.841 66h-.991v-3.698h.991V66zm-1.049-4.655c0-.148.048-.27.146-.366a.566.566 0 01.407-.144c.169 0 .303.048.404.144.1.096.15.218.15.366 0 .15-.051.273-.154.369a.554.554 0 01-.4.143.566.566 0 01-.403-.143.488.488 0 01-.15-.37zm3 3.859h1.809V66h-3.07v-.602l1.74-2.296h-1.688v-.8h2.963v.584l-1.754 2.318zm4.57.796a1.129 1.129 0 01-.099-.332c-.239.267-.55.4-.933.4-.362 0-.663-.105-.902-.314a1.014 1.014 0 01-.356-.793c0-.392.145-.693.434-.902.292-.21.712-.316 1.262-.318h.454v-.212a.603.603 0 00-.133-.41c-.087-.103-.225-.154-.414-.154a.596.596 0 00-.393.12.41.41 0 00-.14.328h-.988c0-.215.066-.413.199-.595a1.3 1.3 0 01.56-.427c.242-.105.513-.158.814-.158.455 0 .816.116 1.083.346.269.227.403.549.403.963v1.603c.003.351.052.617.147.797V66h-.998zm-.817-.687a.865.865 0 00.404-.096.648.648 0 00.273-.263v-.636h-.369c-.494 0-.758.171-.79.513l-.003.058c0 .123.043.225.13.304.087.08.205.12.355.12zm2.284-1.19c0-.567.134-1.024.403-1.37.271-.346.636-.52 1.094-.52.405 0 .721.14.946.417l.041-.348h.896v3.575c0 .324-.074.605-.222.844-.146.24-.352.422-.619.547a2.18 2.18 0 01-.936.188c-.272 0-.536-.055-.793-.164-.258-.107-.453-.246-.585-.417l.438-.602c.246.276.544.414.895.414.262 0 .466-.07.612-.212.146-.139.219-.337.219-.595v-.198c-.228.258-.528.386-.899.386-.444 0-.805-.173-1.08-.52-.274-.348-.41-.81-.41-1.383v-.041zm.987.072c0 .335.068.599.202.79.135.189.319.284.554.284.301 0 .516-.113.646-.339v-1.555c-.132-.226-.345-.338-.639-.338a.651.651 0 00-.561.29c-.134.194-.202.483-.202.868zm4.857 1.873c-.542 0-.984-.166-1.326-.499-.339-.332-.509-.776-.509-1.33v-.095c0-.371.072-.703.215-.995.144-.294.347-.52.609-.676.264-.16.565-.24.902-.24.506 0 .903.16 1.193.479.292.319.437.771.437 1.357v.403h-2.355a.924.924 0 00.287.581.88.88 0 00.612.219c.381 0 .678-.138.892-.414l.486.544c-.148.21-.349.374-.602.492a1.989 1.989 0 01-.841.174zm-.112-3.035a.625.625 0 00-.479.198c-.121.133-.198.322-.232.568h1.374v-.079c-.005-.218-.064-.387-.178-.506-.114-.12-.276-.18-.485-.18zm3.124-.731l.03.413c.262-.321.617-.482 1.063-.482.477 0 .804.188.981.564.26-.376.63-.564 1.111-.564.401 0 .7.118.896.352.196.233.294.584.294 1.053V66h-.992v-2.358c0-.21-.041-.363-.123-.458-.082-.098-.226-.147-.434-.147-.296 0-.501.14-.615.423l.003 2.54h-.987v-2.355c0-.214-.043-.37-.127-.465-.084-.096-.228-.143-.431-.143-.28 0-.483.116-.608.348V66h-.988v-3.698h.927z"
            fill="currentColor"
          />
        )}
        <g clipPath="url(#clip0)">
          <path
            d="M45.18 63.756a.705.705 0 00-.95-.246l-.026.015a.666.666 0 00-.252.924.705.705 0 00.949.245l.027-.014a.666.666 0 00.252-.924z"
            fill="currentColor"
          />
          <path
            d="M51.432 41.043c-2.373-4.003-6.206-6.866-10.792-8.062-4.585-1.197-9.375-.583-13.486 1.728-4.112 2.311-7.053 6.043-8.281 10.508-1.229 4.464-.598 9.128 1.775 13.13 2.13 3.591 5.514 6.32 9.53 7.684 1.903.647 3.89.97 5.874.97 2.157 0 4.31-.382 6.346-1.144a.67.67 0 00.399-.873.7.7 0 00-.897-.389c-5.418 2.028-11.284 1.107-15.666-2.096l.622-3.162.3-.095c1.133-.358 1.755-1.547 1.387-2.65l-.22-.659a.728.728 0 01.001-.466c.193-.573.124-1.2-.19-1.72a2.16 2.16 0 00-1.448-1l-1.568-.298-3.024-2.239a.71.71 0 00-.635-.105l-1.77.56a15.511 15.511 0 01-.003-1.846c.07.064.116.107.144.135a.684.684 0 00.128.152c.144.128.275.187.55.187.253 0 .627-.05 1.245-.138a71.54 71.54 0 001.174-.18.691.691 0 00.524-.402.66.66 0 00-.065-.646l-.851-1.216 1.22-.85a.683.683 0 00.198-.213l1.89-3.213.762-.795c.779-.813 1.001-2.002.566-3.029a3.133 3.133 0 00-1.265-1.45 16.62 16.62 0 019.944-3.412l-1.24 1.514-4.598 1.57a.687.687 0 00-.412.38l-1.284 3.03a.661.661 0 00.076.65l1.876 2.559c-.268.238-.53.586-.842 1.017-.137.19-.266.368-.356.468-.078.088-.155.173-.233.257-.403.442-.82.899-1.116 1.51-.652 1.342-.52 2.903.343 4.072.835 1.131 2.211 1.706 3.68 1.538.24-.028.462-.081.678-.133.596-.144.784-.158.975.016.093.085.102.1.1.388-.002.183-.003.41.062.67.104.415.371.703.587.933.107.115.217.233.252.313.216.505.122.785-.085 1.398l-.054.161c-.314.947.124 1.885.51 2.713.126.269.244.523.321.747.625 1.804 1.093 2.217 1.468 2.383.197.087.4.126.606.126 1.002 0 2.046-.905 2.526-1.48.301-.36.376-.72.43-.983.027-.132.048-.235.089-.303.062-.103.135-.183.227-.285.187-.204.418-.458.568-.918.114-.35.197-.436.471-.72l.154-.16c.925-.98.687-1.729.434-2.521-.212-.667.16-1.094 1.057-1.908.39-.352.792-.717 1.103-1.156.136-.192.55-.775.294-1.354-.252-.567-.89-.663-1.403-.739-.202-.03-.508-.076-.606-.138-.43-.273-.693-.844-.947-1.396-.05-.11-.1-.219-.15-.324-.091-.188-.181-.415-.277-.655-.252-.637-.539-1.359-1.026-1.862-.438-.452-1.264-.67-1.993-.862a8.658 8.658 0 01-.629-.18.713.713 0 00-.399-.024c-.354.08-.576.17-.74.298a.844.844 0 00-.247.324c-.254-.119-.604-.346-.82-.485l-.013-.009a.936.936 0 00-.061-.65c-.388-.8-1.676-.737-1.93-.716-.144.012-.327.018-.52.025-.303.01-.639.022-.97.058l.017-.046a1.774 1.774 0 011.667-1.142h.395a.685.685 0 00.694-.676.685.685 0 00-.694-.676h-.395a3.19 3.19 0 00-2.688 1.46l-1.036-1.413 1.02-2.405 4.492-1.534a.695.695 0 00.314-.216l1.997-2.44c5.104.473 9.908 3.259 12.66 7.901a15.55 15.55 0 011.637 3.87l-.294.256a1.786 1.786 0 00-.619 1.33l-.48-1.284a1.678 1.678 0 00-.312-.523l-.856-.975a1.76 1.76 0 00-1.325-.595h-1.047c-.371 0-.711.199-.887.517a.956.956 0 00.05 1.006l.106.155A7.744 7.744 0 0143.91 46.8l-1.436-2.677v-.597a.667.667 0 00-.214-.489l-1.293-1.201a.7.7 0 00-.25-.15l-1.163-.397a.7.7 0 00-.885.413.671.671 0 00.425.862l1.022.35.97.901v.474c0 .11.027.217.079.313l1.797 3.351c.161.302.528.44.855.322l.524-.188a9.12 9.12 0 003.258-2.03.663.663 0 00.087-.853l-.037-.054h.331c.104 0 .202.043.27.12l.855.975a.34.34 0 01.064.106l.944 2.528a.689.689 0 00.652.445c.182 0 .36-.07.491-.198l.45-.438c.284-.277.48-.627.573-1.016a15.81 15.81 0 01-6.105 14.56.664.664 0 00-.117.95.707.707 0 00.975.114 17.231 17.231 0 006.447-10.257 16.902 16.902 0 00-2.047-11.997zm-29.89 10.458l2.864 2.12a.702.702 0 00.287.125l1.726.328c.22.042.404.169.518.357a.725.725 0 01.067.614 2.037 2.037 0 00-.002 1.306l.22.659a.748.748 0 01-.495.946l-.69.219a.682.682 0 00-.467.516l-.556 2.822a16.215 16.215 0 01-3.163-3.841 15.593 15.593 0 01-2.017-5.63l1.709-.541zm4.048-10.784l-.817.852a.68.68 0 00-.095.126l-1.855 3.153-1.649 1.148a.665.665 0 00-.17.93l.617.881a26.04 26.04 0 01-.886.116l-.128-.116a34.65 34.65 0 00-.736-.64 15.849 15.849 0 014.891-9.044c.506.155.922.523 1.125 1.003a1.47 1.47 0 01-.297 1.591zm5.662 3.695c.31-.17 1.028-.195 1.553-.213.21-.007.41-.014.587-.029.093-.007.197-.006.295.002a.658.658 0 00-.039.349c.034.21.167.392.359.492.13.068.312.186.503.31.543.352 1.158.752 1.736.788.526.033.818-.259.944-.383l.029-.029a.728.728 0 00.186-.221l.347.093c.411.108 1.177.31 1.346.484.3.31.534.9.74 1.421.105.263.204.511.314.742.048.098.094.2.142.303.32.696.684 1.485 1.454 1.975.35.222.778.286 1.156.343.045.007.098.014.15.023-.223.305-.543.594-.88.9-.86.78-1.93 1.75-1.437 3.297.233.73.243.81-.13 1.206l-.143.15c-.32.331-.574.593-.783 1.236-.061.186-.14.273-.283.43-.114.125-.257.281-.389.5-.157.263-.209.516-.25.719-.042.2-.065.3-.146.396-.183.22-.525.538-.877.755-.326.202-.516.23-.581.225-.075-.077-.343-.416-.748-1.588-.1-.289-.24-.586-.373-.874-.296-.634-.602-1.29-.453-1.738l.052-.155c.238-.705.462-1.371.046-2.34-.126-.296-.328-.512-.505-.702-.115-.123-.245-.263-.265-.343-.025-.098-.024-.211-.023-.342.002-.354.006-.887-.54-1.384-.768-.7-1.664-.485-2.257-.342-.182.044-.354.085-.507.103-.975.111-1.846-.247-2.39-.984-.569-.77-.651-1.808-.215-2.706.21-.435.53-.784.899-1.189.08-.088.162-.177.243-.268a7.72 7.72 0 00.442-.576c.188-.26.538-.744.69-.836z"
            fill="currentColor"
          />
          <path
            d="M46.733 55.66l-.334-1.226a.69.69 0 00-.59-.498.7.7 0 00-.692.349c-.076.137-.145.281-.211.421-.111.235-.227.479-.347.613-.067.076-.24.157-.407.236-.4.187-.948.445-1.157 1.094-.13.403-.081.721-.046.954.03.201.038.271-.017.398l-.007.016c-.221.505-.633 1.445-.056 2.244.411.57.844.717 1.18.717.066 0 .128-.005.185-.014.709-.113 1.241-.83 1.676-2.258l.817-2.68a.659.659 0 00.006-.366zm-2.154 2.661c-.222.728-.418 1.068-.531 1.219a1.298 1.298 0 01-.043-.056c-.132-.184.066-.637.197-.937l.007-.016c.212-.484.155-.855.114-1.126-.026-.174-.036-.249-.003-.351.027-.085.19-.166.435-.282.109-.05.229-.107.35-.175l-.526 1.724zM37.01 40.419l-.046-.016a.7.7 0 00-.885.414.672.672 0 00.425.862l.047.016a.694.694 0 00.885-.414.672.672 0 00-.425-.862z"
            fill="currentColor"
          />
          <g clipPath="url(#clip1)">
            <path
              d="M41.325 49.814l-2.108-4.387-2.337-.594-.504.906-1.91-.85-.168-.933h-2.916l-2.678 2.909v3.704l1.785 1.797 2.544-.713 1.068.665.984 3.325-.422 1.981 1.406 3.792h1.602l1.788-1.963.535-1.698 1.349-1.358-.058-2.706 1.334-2.01.534-1.815v-.335l-1.828.283z"
              fill="currentColor"
            />
          </g>
        </g>
        <g clipPath="url(#clip2)">
          <path
            d="M56.15 32.684a3.85 3.85 0 00-2.374-1.318l-3.951-11.469c.073-.267.087-.551.04-.834a1.598 1.598 0 00-1.173-1.02l-23.63-3.982a1.17 1.17 0 00-1.009.257L6.76 28.725c-.42.321-.557.89-.338 1.405.184.52.69.886 1.24.894l7.84.64 3.134 9.094c.137.397.453.724.852.882.42.161.877.107 1.212-.144 6.841-4.93 15.482-7.132 24.343-6.202l.488-.014c.254-.073.47-.224.619-.433.276-.303.355-.741.206-1.151l-3.15-9.144L47.67 21.6l3.586 10.408c-1.43 1.123-1.557 3.246-.284 4.743 1.272 1.497 3.463 1.8 4.893.677 1.43-1.123 1.557-3.247.284-4.743z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path
              fill="#fff"
              transform="translate(18.26 32.383)"
              d="M0 0h35.555v34.617H0z"
            />
          </clipPath>
          <clipPath id="clip1">
            <path
              fill="#fff"
              transform="translate(27.256 43.956)"
              d="M0 0h17.344v17.461H0z"
            />
          </clipPath>
          <clipPath id="clip2">
            <path
              fill="#fff"
              transform="matrix(.96905 -.24687 .32576 .94545 0 11.505)"
              d="M0 0h46.605v47.883H0z"
            />
          </clipPath>
        </defs>
      </svg>
    </Box>
  )
}

export default Logo
