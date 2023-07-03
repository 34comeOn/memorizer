import React, { ReactElement } from "react";
import { RadioButtonLabel } from "../../atoms/radioButtonLabel";
import './style.scss';

type TradioFormContainer = {
    labelText: string, 
    labelFor: string, 
    children?: ReactElement,
    drillField: any,
    drillProps: any,
}

export const RadioFormContainer = ({labelText, labelFor, children, drillField, drillProps}: TradioFormContainer) => {
    return(
        <div className='form--radio-input__container'>
            <div className='inner-form--box'>
                <RadioButtonLabel htmlFor={labelFor} checked={drillField.value === labelFor} > 
                    {labelText}
                </RadioButtonLabel>
                <input 
                    className='form--radio-input'
                    id={labelFor}
                    type='radio'
                    {...drillField}
                    {...drillProps}
                    value={labelFor}
                />
            </div>
            {children} 
        </div>
    )
}