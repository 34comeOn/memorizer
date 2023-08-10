import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import './style.scss';
import { UseSubmitButtonToSignUp } from "../../../myHooks/myFormHooks/useSubmitButtonForSignUp";
import { UseSubmitButtonToSignIn } from "../../../myHooks/myFormHooks/useSubmitButtonForSignIn";
import { signInFormValidationSchema, signUpFormValidationSchema } from "../../../validationSchemas";
import { ValidationErrorBox } from "../../atoms/validationErrorBox";
import { PasswordInput } from "../../molecules/passwordInput";
import { ForgotPasswordLink } from "../../atoms/forgotPasswordLink";
import { CustomSpinner } from "../../atoms/customSpinner";
import { useWarningNotification } from "../../../myHooks/utillsHooks/useWarningNotification";
import { useRequestLoading } from "../../../myHooks/useRequestLoading";
import { RESPONSE_ERROR_TITLE } from "../../../constants/stringConstants";

export const SignInAndUpForm = () => {
    const [isSignUpFormActive, setIsSignUpFormActive] = useState(false);

    const [signUpcontextHolder, openSignUpNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.SIGN_UP);
    const [contextHolder, openNotification] = useWarningNotification(RESPONSE_ERROR_TITLE.SIGN_IN);
    const {isLoading, onChangeLoadingStatus} = useRequestLoading();

    const onSignUpHandler = UseSubmitButtonToSignUp(onChangeLoadingStatus, openSignUpNotification as ((descriptionText: string) => void));
    const onSignInHandler = UseSubmitButtonToSignIn(onChangeLoadingStatus, openNotification as ((descriptionText: string) => void));
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
            {({ errors, touched, values })=>{
                return(
                    <Form className='sign-in--form'>
                        <>
                            {signUpcontextHolder}
                        </>
                        <>
                            {contextHolder}
                        </>
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
                            value = {values.password}
                        />
                        <CustomSpinner isLoading={isLoading} />
                        {errors.password && touched.password ? (
                            <ValidationErrorBox error={errors.password} />
                        ) : null}
                        {!isSignUpFormActive && <ForgotPasswordLink />}
                        {isSignUpFormActive && <PasswordInput 
                            type='password' 
                            name='confirmPassword' 
                            labelValue='Confirm password'
                            value = {values.confirmPassword}
                        />}
                        {isSignUpFormActive && errors.confirmPassword && touched.confirmPassword ? (
                            <ValidationErrorBox error={errors.confirmPassword} />
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