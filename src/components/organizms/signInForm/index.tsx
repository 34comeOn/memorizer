import React from "react";
import { Formik, Form } from 'formik';
import { FormInput } from "../../molecules/formInput";
import { useNavigate } from "react-router-dom";
import './style.scss';
import { useAppDispatch } from "../../../app/hooks";
import { logIn } from "../../../store/reducers/accountReduser";

interface IsignInForm {
    email: string, 
    userName: string, 
    password: string, 
    confirmPassword: string,
}

export const SignInForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmitHandler = (values: IsignInForm) => {
        if (localStorage.getItem(values.email)) {
            alert('User with such e-mail address is already registred!')
        } else {
            localStorage.setItem(values.email, JSON.stringify(values));
            dispatch(logIn(values.userName));
            navigate('/');
        }
    }

    return(
        <Formik 
            initialValues={{ 
                email: '', 
                userName: '', 
                password:'', 
                confirmPassword:'' 
            }}
            onSubmit={
                onSubmitHandler
            }
        >
            {()=>{
                return(
                    <Form className='sign_in--form'>
                        <FormInput 
                            type='text' 
                            name='userName' 
                            placeholder='Max Power' 
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