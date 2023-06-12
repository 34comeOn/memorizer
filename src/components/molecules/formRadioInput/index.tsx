import React from "react";
import { Field, FormikProps, useFormikContext} from "formik";
import './style.scss';
import { RadioButton } from "./radioButton";

type TformInput = {
    type: string;
    name: string;
    labelValue: string;
    placeholder?: string,
    width?: string,
    defaultChecked?: boolean,
};

export const FormRadioInput = ({labelValue, name, placeholder, type, width, defaultChecked}: TformInput) => {
    // const { values, isValid, dirty }: FormikProps<TformInput> = useFormikContext()
    // console.log(values)
    // console.log(isValid)
    // console.log(dirty)
    return(
        <div className='form--radio-input__container'>
            <label className='form--radio-label' htmlFor={labelValue}>
                {labelValue}
            </label>
            <Field 
                component={RadioButton}
                className='form--radio-input'
                id={labelValue}
                name={name}
                checked={defaultChecked}
                onBlur = {() => console.log('blur')}
                // type={type} 
                placeholder={placeholder} 
            />
        </ div>
        
    )
}