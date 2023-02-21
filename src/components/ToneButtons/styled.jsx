import tw from 'tailwind-styled-components'


export const Container = tw.div`
    justify-center
`
export const PlayContainer = tw.div`
    flex
    justify-center
    items-stretch
    h-50
    mg-2
`


export const PlayButton = tw.button`
    bg-transparent
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