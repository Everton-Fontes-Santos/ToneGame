import React, { forwardRef } from "react";

const ToneButton = forwardRef(({item, onClick, note}, ref)=>(
    <button 
    className="ToneButton"
    onClick={onClick}
    ref={ref}
    note={note}
    >
        {item.name}
    </button>
))

export default  ToneButton