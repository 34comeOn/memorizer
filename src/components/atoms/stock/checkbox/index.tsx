import React from "react";
import { StyledCheckbox } from "./styledCheckbox";
import { StyledLabel } from "./styledLabel";

type TOnToggleCheckbox = {
    (checkboxName : string): void ;
}

export type TCheckbox = {
    labelValue: string, 
    defaultChecked?: boolean,
    name: string,
    onChange: TOnToggleCheckbox ,
}

export const StockCheckbox = ({labelValue, 
    onChange,
    ...props}: TCheckbox) => {

    return (
        <StyledLabel>
            {labelValue}
            <StyledCheckbox onChange={()=> onChange(labelValue)} type="checkbox" {...props}/>
        </StyledLabel>
    )
} 