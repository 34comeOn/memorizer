import React, { ReactElement } from "react";
import { RadioButtonLabel } from "../../atoms/radioButtonLabel";
import './style.scss';

type TradioButtonsContainer = {
    labelText: string, 
    labelFor: string, 
    children?: ReactElement,
    drillField: any,
    drillProps: any,
    checked?: boolean,
}

export const RadioButtonsContainer = ({labelText, labelFor, children, drillField, drillProps, checked}: TradioButtonsContainer) => {
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
                    defaultChecked={checked}
                />
            </div>
            {children} 
        </div>
    )
}