import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { UseSubmitButtonToSignUp } from "../../../myHooks/myFormHooks/useSubmitButtonForSignUp";
import { UseSubmitButtonToSignIn } from "../../../myHooks/myFormHooks/useSubmitButtonForSignIn";
import { signInFormValidationSchema, signUpFormValidationSchema } from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { PasswordInput } from "../../molecules/passwordInput";

export const SignInAndUpForm = () => {
    const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);
    const onSignUpHandler = UseSubmitButtonToSignUp();
    const onSignInHandler = UseSubmitButtonToSignIn();
    return(
        <Formik 
            initialValues={{ 
                email: '', 
                userName: '', 
                password:'', 
                confirmPassword:'' 
            }}
            validationSchema={isSignUpFormActive? signUpFormValidationSchema : signInFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={
                isSignUpFormActive? onSignUpHandler: onSignInHandler
            }
        >
            {({ errors, touched })=>{
                return(
                    <Form className='sign_in--form'>
                        {isSignUpFormActive && <FormInput 
                            type='text' 
                            name='userName' 
                            labelValue='Name'
                        />}
                        {isSignUpFormActive && errors.userName && touched.userName ? (
                            <ValidationErrorBox error={errors.userName} />
                        ) : null}
                        <FormInput 
                            type='text' 
                            name='email' 
                            labelValue='E-mail'
                        />
                        {errors.email && touched.email ? (
                            <ValidationErrorBox error={errors.email} />
                        ) : null}
                        <PasswordInput 
                            type='password'
                            name='password' 
                            labelValue='Password'
                        />
                        {errors.password && touched.password ? (
                            <ValidationErrorBox error={errors.password} />
                        ) : null}
                        {isSignUpFormActive && <PasswordInput 
                            type='password' 
                            name='confirmPassword' 
                            labelValue='Confirm password'
                        />}
                        {isSignUpFormActive && errors.confirmPassword && touched.confirmPassword ? (
                            <ValidationErrorBox error={errors.confirmPassword} />
                        ) : null}
                        <button className='submit--button' type='submit' onClick={()=> console.log(errors)}>
                            {isSignUpFormActive? 'Sign up' : 'Sign in'}
                        </ button>
                        <span className='toggle-button--span'>
                            {!isSignUpFormActive? 'Don`t have an account yet?' : 'Have account?'}
                        </span>
                        <button className='toggle--sign-button' type='button' onClick={() => setIsSignUpFormActive(!isSignUpFormActive)}>
                            {!isSignUpFormActive? 'Sign up' : 'Sign in'}
                        </ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}