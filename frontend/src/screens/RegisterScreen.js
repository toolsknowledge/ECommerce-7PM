import React from "react";
import { useFormik } from "formik";
function RegisterScreen(){

    const initialValues = {fname:"",lname:"",email:""};


    const onSubmit = values=>{
        console.log(values);
    }

    const validate = values=>{
        const errors = {};

        if(!values.fname){
            errors.fname = "First Name Required";    
        }

        if(!values.lname){
            errors.lname = "Last Name Required";
        }

        if(!values.email){
            errors.email = "Email is Required";
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
            errors.email = "Invalid Email Format";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log( formik.touched );


    return(
        <React.Fragment>
            <div className="MainForm">
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-control">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" 
                               name="fname" 
                               id="fname" 
                               onChange={formik.handleChange} 
                               value={formik.values.fname}
                               onBlur={formik.handleBlur}></input>
                        {formik.touched.fname && formik.errors.fname?<div className="error">{formik.errors.fname}</div>:null}
                    </div>

                    <div className="form-control">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" 
                               name="lname" 
                               id="lname" 
                               onChange={formik.handleChange} 
                               value={formik.values.lname}
                               onBlur={formik.handleBlur}></input>
                        {formik.touched.lname && formik.errors.lname?<div className="error">{formik.errors.lname}</div>:null}
                    </div>

                    <div className="form-control">
                        <label htmlFor="Email">Email</label>
                        <input type="email" 
                               name="email" 
                               id="email" 
                               onChange={formik.handleChange} 
                               value={formik.values.email}
                               onBlur={formik.handleBlur}></input>
                        {formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div>:null}
                    </div>
                    
                    <div className="form-control">
                        <input type="submit"></input>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
export default RegisterScreen;