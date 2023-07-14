import React from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { forgotPasswordFormValidationSchema} from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { UseSubmitForRequireNewPassword } from "../../../myHooks/myFormHooks/useSubmitForRequireNewPassword";
import { FORGOT_PASSWORD_TEXT } from "../../../constants/stringConstants";

export const ForgotPasswordForm = () => {
    const onRequireNewPassword = UseSubmitForRequireNewPassword();

    return(
        <Formik 
            initialValues={{ 
                email: '', 
            }}
            validationSchema= {forgotPasswordFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                onRequireNewPassword
            }
        >
            {({ errors, touched })=>{
                return(
                    <Form className='forgot-password--form'>
                        <span className='forgot-password--text'>
                            {FORGOT_PASSWORD_TEXT}
                        </span>
                        <FormInput 
                            type='text' 
                            name='email' 
                            labelValue='E-mail'
                        />
                        {errors.email && touched.email ? (
                            <ValidationErrorBox error={errors.email} />
                        ) : null}


                        <button className='forgot-password--submit-button' type='submit' onClick={()=> console.log(errors)}>
                            Send new password
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}