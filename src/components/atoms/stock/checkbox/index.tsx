import React, { SyntheticEvent } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { changeAll } from "../../../../store/reducers/checkboxReduser";
import { StyledCheckbox } from "./styledCheckbox";
import { StyledLabel } from "./styledLabel";

export type TCheckbox = {
    labelValue: string, 
    defaultChecked?: boolean,
    name: string,
    handleOnChange?: (event: SyntheticEvent<HTMLElement>)=> void
}

export const StockCheckbox = ({labelValue,handleOnChange, ...props}: TCheckbox) => {
    return (
        <StyledLabel>
            {labelValue}
            <StyledCheckbox onChange={handleOnChange} type="checkbox" {...props}/>
        </StyledLabel>
    )
} 