import tw from 'tailwind-styled-components'
import st from 'styled-components'

export const Container = tw.div`
    flex
    justify-center
    items-center
    min-h-screen
    bg-black/80
`

export const Icon= tw.div`
    w-full
    h-full
    flex
    justify-center
    items-center
    relative
    -left-[58%]
    pointer
`

export const PlayContainer = tw.div`
    rounded-full
    relative
    h-[350px]
    w-[350px]
    border-white
    border-2
`

export const PlayButton = tw.button`
    absolute
    h-[50px]
    w-[50px]
    rounded-full
    border
    z-[100]
    overflow-hidden
    delay-[0.5s]
    shadow-[0 0 0 4px #222]
    origin-[400%]
    rotate-0
    text-white
`