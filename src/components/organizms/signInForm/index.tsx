import React from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import './style.scss';

export const SignInForm = () => {
    return(
        <Formik 
            initialValues={{ 
                email: '', 
                userName: '', 
                password:'', 
                confirmPassword:'' 
            }}
            onSubmit={
                (values) => {
                    console.log(values)
                }
            }
        >
            {()=>{
                return(
                    <Form className='sign_in--form'>
                        <FormInput 
                            type='text' 
                            name='userName' 
                            placeholder='Max' 
                            labelValue='Name'
                        />
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
                        <FormInput 
                            type='password' 
                            name='confirmPassword' 
                            placeholder='MyMemory1sB&st' 
                            labelValue='Confirm password'
                        />
                        <button className='submit-button' type='submit'>Sign in</ button>
                    </Form>
                )
            }}
        </ Formik>
    )
}