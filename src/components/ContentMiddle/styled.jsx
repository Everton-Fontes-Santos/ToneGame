import tw from 'tailwind-styled-components'

export const Cont = tw.div`
    absolute
    overflow-hidden
    inset-0
    text-center
    justify-center
    items-center

    before:inset-[60px]
    before:absolute
    before:border-4
    before:border-transparent
    before:border-l-white
    before:border-r-[#2196f5]
    before:rounded-full
    before:content-[attr(data-text)]
    before:justify-center
    before:items-center
    before:text-center
    before:z-1
    before:animate-[spin_4s_linear_infinite]
`