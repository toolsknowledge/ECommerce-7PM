import React from "react";
import Signup from "./components/Signup";
import logo from "./assets/images/logo.jpg";
import rocket from "./assets/images/rocket.png";
const Registration = ()=>{
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <Signup></Signup>
                    </div>
                    <div className="col-md-7">
                        <img src={rocket} className="img-fluid w-100"></img>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Registration;
