import React, { SyntheticEvent } from "react";
import { StockCheckbox } from "../../atoms/stock/checkbox";
import { StyledCheckboxList } from "./styledCheckboxList";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addListItemsCategories, 
    getRefreshedFiltersState,
    removeListItemsCategories, 
    updateListItemsCategories 
} from "../../../store/reducers/checkboxReduser";
import { useCheckboxCurrentState } from "../../../myHooks/useCheckboxCurrentState";

export const CheckboxList = () => {
    const dispatch = useAppDispatch();
    const currentFilters = useAppSelector(getRefreshedFiltersState);
    const {isMainCheckboxChecked} = useCheckboxCurrentState('all');

    const handleOnChange = (event: SyntheticEvent<HTMLElement>)=>{
        const currentChangedCheckboxName = (event.target as HTMLInputElement).name;
        const isCurrentCheckboxChecked = (event.target as HTMLInputElement).checked;

        if (currentChangedCheckboxName === 'all') {
            if (isCurrentCheckboxChecked) {
                dispatch(updateListItemsCategories([]));
                dispatch(addListItemsCategories('all'));
            } 
        } else if (currentChangedCheckboxName !== 'all') {
            if (isMainCheckboxChecked) {
                dispatch(updateListItemsCategories([]));
            }
            if (isCurrentCheckboxChecked) {
                dispatch(addListItemsCategories(currentChangedCheckboxName));
            } else {
                dispatch(removeListItemsCategories(currentChangedCheckboxName));
            }
        }
    }

    return( 
        <StyledCheckboxList>
            <StockCheckbox 
             handleOnChange={handleOnChange} labelValue='All filters' name='all'/>
            {currentFilters.map((checkboxName, index) => 
                <StockCheckbox 
                handleOnChange={handleOnChange} 
                key={index} labelValue={checkboxName} name={checkboxName}/>
                )}
        </StyledCheckboxList>
    )
}