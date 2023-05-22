import React from "react";
import { Field} from "formik";
import './style.scss';

type TformInput = {
    labelValue: string, 
    name: string, 
    placeholder: string,
    type: string,
}

export const FormInput = ({labelValue, name, placeholder, type}: TformInput) => {

    return(
        <>
            <label className='form--label' htmlFor={labelValue}>
                {labelValue}
            </label>
            <Field 
            className='form--input'
                id={labelValue}
                name={name}
                type={type} 
                placeholder={placeholder} 
            />
        </>
        
    )
}