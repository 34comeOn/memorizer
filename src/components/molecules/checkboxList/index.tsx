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
import { MAIN_FILTER_CHECKBOX } from "../../../constants/stringConstants";

export const CheckboxList = () => {
    const dispatch = useAppDispatch();
    const currentFilters = useAppSelector(getRefreshedFiltersState);
    const {isMainCheckboxChecked} = useCheckboxCurrentState(MAIN_FILTER_CHECKBOX);

    const handleOnChange = (event: SyntheticEvent<HTMLElement>)=>{
        const currentChangedCheckboxName = (event.target as HTMLInputElement).name;
        const isCurrentCheckboxChecked = (event.target as HTMLInputElement).checked;

        if (currentChangedCheckboxName === MAIN_FILTER_CHECKBOX) {
            if (isCurrentCheckboxChecked) {
                dispatch(updateListItemsCategories([]));
                dispatch(addListItemsCategories(MAIN_FILTER_CHECKBOX));
            } 
        } else if (currentChangedCheckboxName !== MAIN_FILTER_CHECKBOX) {
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
             handleOnChange={handleOnChange} labelValue='All filters' name={MAIN_FILTER_CHECKBOX}/>
            {currentFilters.map((checkboxName, index) => 
                <StockCheckbox 
                handleOnChange={handleOnChange} 
                key={index} labelValue={checkboxName} name={checkboxName}/>
                )}
        </StyledCheckboxList>
    )
}