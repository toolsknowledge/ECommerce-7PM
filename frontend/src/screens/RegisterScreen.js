import React from "react";
import { useFormik } from "formik";
function RegisterScreen(){

    const initialValues = {fname:"",lname:"",email:""};


    const onSubmit = values=>{
        console.log(values);
    }

    const validate = values=>{
        const errors = {};

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });




    return(
        <React.Fragment>
            <div className="MainForm">
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" onChange={formik.handleChange} value={formik.values.fname}></input>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" onChange={formik.handleChange} value={formik.values.lname}></input>

                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}></input>

                    <input type="submit"></input>
                </form>
            </div>
        </React.Fragment>
    )
}
export default RegisterScreen;