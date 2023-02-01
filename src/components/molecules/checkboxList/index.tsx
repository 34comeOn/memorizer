import React, { SyntheticEvent } from "react";
import { StockCheckbox } from "../../atoms/stock/checkbox";
import { StyledCheckboxList } from "./styledCheckboxList";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addListItemsCategories, changeAll, getRefreshedFiltersState, getUpdatedlistItemsCategories, removeListItemsCategories } from "../../../store/reducers/checkboxReduser";

export const CheckboxList = () => {
    const dispatch = useAppDispatch();
    const currentFilters = useAppSelector(getRefreshedFiltersState);
    const currentlistItemsCategories = useAppSelector(getUpdatedlistItemsCategories);
    
    const handleOnChange = (event: SyntheticEvent<HTMLElement>)=>{
        const currentChangedCheckbox = (event.target as HTMLInputElement).name;
        if( currentChangedCheckbox === 'all') {
            dispatch(changeAll())
        }
        if (currentlistItemsCategories.includes(currentChangedCheckbox)) {
            dispatch(removeListItemsCategories(currentChangedCheckbox));
        } else {
            dispatch(addListItemsCategories(currentChangedCheckbox));
        }
    }
    return( 
        <StyledCheckboxList>
            <StockCheckbox handleOnChange={handleOnChange} labelValue='All filters' name='all'/>
            {currentFilters.map((checkboxName, index) => 
                <StockCheckbox handleOnChange={handleOnChange} key={index} labelValue={checkboxName} name={checkboxName}/>
                )}
        </StyledCheckboxList>
    )
}