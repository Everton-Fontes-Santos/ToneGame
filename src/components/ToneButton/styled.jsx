import tw from 'tailwind-styled-components'

export const Styled = tw.button`
    ${props=> props.bg}
    w-full 
    hover:bg-blue-500 
    text-blue-700
    font-semibold 
    hover:text-white 
    py-2 
    px-4 
    border 
    border-blue-500 
    hover:border-transparent 
    rounded
`