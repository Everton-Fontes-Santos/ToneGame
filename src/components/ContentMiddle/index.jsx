import React, { forwardRef } from "react";
import {Cont} from './styled'

const Content = forwardRef(({children, ...props}, ref)=>(
    <Cont 
    {...props}
    ref={ref}
    data-text={children}
    >
        {children}
    </Cont>
))

export default  Content