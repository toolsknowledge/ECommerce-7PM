import React from "react";
import TextField from "./TextField";
import * as Yup from "yup";
import { Formik,Form } from "formik";

const Signup = ()=>{

    const validate = Yup.object({
        firstName : Yup.string().required("First Name Mandatory").max(10,"maximum 10 characters are allowed").min(6,"minimum 6 characters are required"),
        lastName : Yup.string().required("Last Name Mandatory").max(10,"maximum 10 characters are allowed").min(6,"minimum 6 characters are required"),
        email : Yup.string().required("Email Mandatory").email("please enter valid email")
    })




    return(
        <React.Fragment>
            <h1>Registration</h1>
            <Formik initialValues={{firstName:"",lastName:"",email:""}}
                    validationSchema={validate}
                    onSubmit={values=>{console.log(values)}}>
                <Form>
                    <TextField type="text" 
                               label="First Name" 
                               name="firstName"
                               placeholder="Enter First Name"></TextField>

                    <TextField type="text" 
                               label="Last Name" 
                               name="lastName"
                               placeholder="Enter Last Name"></TextField>

                    <TextField type="email" 
                               label="Email" 
                               name="email"
                               placeholder="Enter Email"></TextField>
                </Form>

            </Formik>
        </React.Fragment>
    )
};

export default Signup;