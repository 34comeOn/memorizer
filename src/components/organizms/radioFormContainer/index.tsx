import { Field } from "formik";
import React, { ReactElement } from "react";
import { RadioButtonLabel } from "../../atoms/radioButtonLabel";

type TradioFormContainer = {
    labelText: string, 
    labelFor: string, 
    stateValue: string,
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    children?: ReactElement,
    name: string,
}

export const RadioFormContainer = ({labelText, labelFor, stateValue, changeValue, children,name}: TradioFormContainer) => {
    return(
        <div className='form--radio-input__container'>
            <div style={{display: 'flex', flexDirection: 'row-reverse', marginBottom: '5px',alignItems: 'center'}}>
                <RadioButtonLabel htmlFor={labelFor} checked={stateValue === labelFor} > 
                    {labelText}
                </RadioButtonLabel>
                {/* <input className='form--radio-input' id={labelFor} type="radio"
                 name="categoryButtons" 
                value={labelFor}
                checked={stateValue === labelFor}
                onChange={changeValue}
                /> */}


                <Field 
                className='form--radio-input'
                id={labelFor}
                value={labelFor}
                name={name}
                type="radio"
                checked={stateValue === labelFor}
                onChange={changeValue}
            />
            </div>
            {children} 
        </div>
    )
}