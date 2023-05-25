import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { UseSubmitButtonToSignUp } from "../../../myHooks/myFormHooks/useSubmitButtonForSignUp";
import { UseSubmitButtonToSignIn } from "../../../myHooks/myFormHooks/useSubmitButtonForSignIn";

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
            onSubmit={
                isSignUpFormActive? onSignUpHandler: onSignInHandler
            }
        >
            {()=>{
                return(
                    <Form className='sign_in--form'>
                        {isSignUpFormActive && <FormInput 
                            type='text' 
                            name='userName' 
                            placeholder='Max Power' 
                            labelValue='Name'
                        />}
                        <FormInput 
                            type='email' 
                            name='email' 
                            placeholder='example@gmail.com' 
                            labelValue='E-mail'
                        />
                        <FormInput 
                            type='password'
                            name='password' 
                            placeholder='MyMemory1sB&st' 
                            labelValue='Password'
                        />
                        {isSignUpFormActive && <FormInput 
                            type='password' 
                            name='confirmPassword' 
                            placeholder='MyMemory1sB&st' 
                            labelValue='Confirm password'
                        />}
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