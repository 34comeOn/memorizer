import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { UseSubmitButtonToSignUp } from "../../../myHooks/myFormHooks/useSubmitButtonForSignUp";
import { UseSubmitButtonToSignIn } from "../../../myHooks/myFormHooks/useSubmitButtonForSignIn";
import { signInFormValidationSchema } from "../../../validationSchemas";

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
            // validationSchema={signInFormValidationSchema}
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
                            placeholder='Max Power' 
                            labelValue='Name'
                        />}
                        {isSignUpFormActive && errors.userName && touched.userName ? (
                            <div>{errors.userName}</div>
                        ) : null}
                        <FormInput 
                            type='text' 
                            name='email' 
                            placeholder='example@gmail.com' 
                            labelValue='E-mail'
                        />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <FormInput 
                            type='password'
                            name='password' 
                            placeholder='MyMemory1sB&st' 
                            labelValue='Password'
                        />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        {isSignUpFormActive && <FormInput 
                            type='password' 
                            name='confirmPassword' 
                            placeholder='MyMemory1sB&st' 
                            labelValue='Confirm password'
                        />}
                        {isSignUpFormActive && errors.confirmPassword && touched.confirmPassword ? (
                            <div>{errors.confirmPassword}</div>
                        ) : null}
                        <button className='submit--button' type='submit'>
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