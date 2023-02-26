import React, { forwardRef } from "react";
import {Styled, Label} from "./styled";

const ToneButton = forwardRef(({item, onClick, note, bg,rotate}, ref)=>(
    <Styled 
    // className="ToneButton"
    rotate={rotate}
    onClick={onClick}
    ref={ref}
    note={note}
    bg={bg}
    >
        <Label rotate={rotate}>
            {item.name}
        </Label>
    </Styled>
))

export default  ToneButton