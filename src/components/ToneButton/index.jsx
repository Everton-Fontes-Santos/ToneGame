import React, { forwardRef } from "react";
import {Styled} from "./styled";

const ToneButton = forwardRef(({item, onClick, note, bg}, ref)=>(
    <Styled 
    // className="ToneButton"
    onClick={onClick}
    ref={ref}
    note={note}
    bg={bg}
    >
        {item.name}
    </Styled>
))

export default  ToneButton