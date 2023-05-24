import React from "react";
import { Form, Formik } from "formik";
import { FormInput } from "../../components/molecules/formInput";
import './style.scss';

export const NewCollectionPage = () => {
    return(
        <>
            <Formik 
                initialValues={{ 
                    title: '', 
                    isPrivate: true, 
                }}
                onSubmit={
                ()=> console.log('hi')
                }
            >
                {()=>{
                    return(
                        <Form className='new-collection--form'>
                            <FormInput 
                                type='text' 
                                name='title' 
                                placeholder='' 
                                labelValue='Come up with title of your new collection'
                            />
                            <button className='submit--button' type='submit'>
                                Create collection
                            </ button>
                        </Form>
                    )
                }}
            </ Formik>
        </>
    )
}