import React from "react";
import { Field } from "formik";
import './style.scss';

export const TextArea = () => {
    return(
        <>
            <Field 
                className='form--text-area'
                id='textArea'
                name='cardAnswer' 
                placeholder='Answer is...'
                as='textarea'
                maxLength='1000'
            />
        </>
    )
}