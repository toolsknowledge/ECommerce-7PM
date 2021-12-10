import React, { useRef } from "react";

function Forms(){
    const emailRef = useRef(null);

    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(emailRef.current.value);
    }

    return(
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <label>Email</label>
                <input type="email" ref={emailRef}></input>
                <input type="submit"></input>
            </form>
        </React.Fragment>
    )
}

export default Forms;