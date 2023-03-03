import tw from 'tailwind-styled-components'
import st from 'styled-components'


export const Styled = tw.button`
    w-[40px]
    h-[120px]
    border-4
    border-black
    rounded-[4px]
    outline-none
    pointer
    -left-[4px]
    bg-white
    text-transparent
    ${props=>props.bg}
`

const black = st.button`
    left: ${props=>props.bg}
`

export const BlackButton = tw(black)`
    absolute
    bg-black
    text-transparent
    w-[24px]
    h-[80px]
    outline-none
    border-3
    border-black
    rounded-2
    pointer
    z-100
`