import React from "react";
import { StockCheckbox } from "../../atoms/stock/checkbox";
import { StyledCheckboxList } from "./styledCheckboxList";
import { filtersArray } from "../../../utils/utils";

export let currentFilters = new Set()

export const CheckboxList = () => {
    const onToggleCheckbox = (checkboxName: string) => {
        if(currentFilters.has(checkboxName)){
            currentFilters.delete(checkboxName)
        } else {
            currentFilters.add(checkboxName)
        }
    }
    
    return( 
        <StyledCheckboxList>
            <StockCheckbox labelValue='All filters' name='all' onChange={onToggleCheckbox} />
            {filtersArray.map((checkboxName, index) => 
                <StockCheckbox key={index} labelValue={checkboxName} name={checkboxName} onChange={onToggleCheckbox}/>
                )}
        </StyledCheckboxList>
    )
}