import tw from 'tailwind-styled-components'
import st from 'styled-components'

export const Container = tw.div`
    flex
    justify-center
    items-center
    min-h-screen
`

export const Icon= tw.div`
    w-full
    h-full
    relative
    pointer
`

export const PlayContainer = tw.div`
    relative
    flex
    justify-center
    items-center
    flex-col
`

export const PlayButton = tw.button`
    w-full
    h-[60px]
    bg-gradient-to-r 
    from-red-500 
    to-blue-500
    border-4
    border-black
    rounded-[4px]
    outline-none
    pointer
`