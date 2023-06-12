import React from "react";
import { RadioButtonLabel } from "../../atoms/radioButtonLabel";

type TradioFormContainer = {
    labelText: string, 
    labelFor: string, 
    stateValue: string,
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const RadioFormContainer = ({labelText, labelFor, stateValue, changeValue}: TradioFormContainer) => {

    return(
        <div className='form--radio-input__container'>
            <RadioButtonLabel htmlFor={labelFor} checked={stateValue === labelFor} > 
                {labelText}
            </RadioButtonLabel>
            <input className='form--radio-input' id={labelFor} type="radio" name="categoryButtons" 
            value={labelFor}
            checked={stateValue === labelFor}
            onChange={changeValue}
            />
        </div>
    )
}