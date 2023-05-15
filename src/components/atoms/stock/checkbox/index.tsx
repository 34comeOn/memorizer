import React, { SyntheticEvent } from "react";
import { StyledCheckbox } from "./styledCheckbox";
import { StyledLabel } from "./styledLabel";
import { useCheckboxCurrentState } from "../../../../myHooks/useCheckboxCurrentState";

export type TCheckbox = {
    labelValue: string, 
    defaultChecked?: boolean,
    name: string,
    handleOnChange?: (event: SyntheticEvent<HTMLElement>)=> void
}

export const StockCheckbox = ({labelValue,handleOnChange, ...props}: TCheckbox) => {
    const {isCurrentCheckboxChecked} = useCheckboxCurrentState(props.name);

    return (
        <StyledLabel>
            {labelValue}
            <StyledCheckbox checked={isCurrentCheckboxChecked} onChange={handleOnChange} type="checkbox" {...props}/>
        </StyledLabel>
    )
} 