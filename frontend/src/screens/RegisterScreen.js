import React from "react";
import { ErrorMessage,Formik,Field, Form } from "formik";
import * as Yup from "yup";
function RegisterScreen(){
    const initialValues = {fname:"",lname:"",email:""};
    const onSubmit = values=>{
        console.log(values);
    }
    const validateSchema = Yup.object({
        fname:Yup.string().required("fname required !"),
        lname:Yup.string().required("lname required !"),
        email : Yup.string().email("invalid email format").required("email is required"),
        address:Yup.string().max(25,"should be 25 characters").required("Address is Required")
    })
    return(
        <React.Fragment>
            <div className="MainForm">
                <Formik initialValues={initialValues}
                        validationSchema={validateSchema}
                        onSubmit={onSubmit}>
                <Form>
                    <div className="form-control">
                        <label htmlFor="fname">First Name</label>
                        <Field type="text" 
                               name="fname" 
                               id="fname"></Field>
                        <ErrorMessage name="fname"></ErrorMessage>
                    </div>

                    <div className="form-control">
                        <label htmlFor="lname">Last Name</label>
                        <Field type="text" 
                               name="lname" 
                               id="lname" ></Field>
                        
                        <ErrorMessage name="lname"></ErrorMessage> 
                    </div>

                    <div className="form-control">
                        <label htmlFor="Email">Email</label>
                        <Field type="email" 
                               name="email" 
                               id="email"></Field>
                        
                        <ErrorMessage name="email"></ErrorMessage>
                    </div>

                    <div className="form-control">
                        <label htmlFor="Address">Address</label>
                        <Field as="textarea"
                               name="address"
                               id="address"></Field>
                        <ErrorMessage name="address"></ErrorMessage>
                    </div>


                    <div className="form-control">
                        <input type="submit"></input>
                    </div>
                </Form>
                </Formik>
            </div>
        </React.Fragment>
    )
}
export default RegisterScreen;