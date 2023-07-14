import React from "react";
import { Field} from "formik";
import './style.scss';

type TformInput = {
    type: string;
    name: string;
    labelValue: string;
    placeholder?: string,
    width?: string,
    disabled?: boolean,
    validateCallback?: (error: string) => string,
};

export const FormInput = ({labelValue, name, placeholder, type, width, validateCallback, disabled }: TformInput) => {

    return(
        <>
            <label className='form--label' htmlFor={labelValue}>
                {labelValue}
            </label>
            <Field 
                className={width? 'form--input form--input-color':'form--input'}
                id={labelValue}
                name={name}
                type={type} 
                placeholder={placeholder} 
                disabled={disabled || false}
                validate={validateCallback}
            />
        </>
    )
}