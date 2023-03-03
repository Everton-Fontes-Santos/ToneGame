import React, { forwardRef } from "react";
import {BlackButton, Styled} from "./styled";

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

export const ToneBlackButton = forwardRef(({item, onClick, note, bg}, ref)=>(
    <BlackButton 
    // className="ToneButton"
    onClick={onClick}
    ref={ref}
    note={note}
    bg={bg}
    >
        {item.name}
    </BlackButton>
))

export default  ToneButton