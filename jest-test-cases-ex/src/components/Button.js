import React from "react";
import "./Button.css";

function Button({label}){
    return <div data-testid="button" className="my_class">{label}</div>
}

export default Button;