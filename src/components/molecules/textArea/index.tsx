import React from "react";
import { Field } from "formik";
import './style.scss';

export const TextArea = () => {
    return(
        <>
            <label className='form--label' htmlFor='textArea'>
                Write down your answer
            </label>
            <Field 
                className='form--text-area'
                id='textArea'
                name='cardAnswer' 
                placeholder='!Cada momento es un tesoro!'
                as='textarea'
                maxLength='1000'
            />
        </>
    )
}