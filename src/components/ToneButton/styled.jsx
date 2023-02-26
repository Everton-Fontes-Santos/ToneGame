import tw from 'tailwind-styled-components'
import st from 'styled-components'

const origin = st.div`
    transform:rotate(${props=>props.rotate}deg)
`

const revert = st.button`
    transform:rotate(-${props=>props.rotate}deg)
`

export const Styled = tw(origin)`
    absolute
    h-[50px]
    w-[50px]
    rounded-[50%]
    border
    z-[100]
    overflow-hidden
    delay-[0.5s]
    shadow-[0 0 0 4px #222]
    origin-[450%]
`

export const Label = tw(revert)`
    absolute
    top-0
    left-0
    w-full
    h-full
    cover
    rounded-full
    delay-[0.5s]
    text-white
`