import React, { SyntheticEvent } from "react";
import { StockCheckbox } from "../../atoms/stock/checkbox";
import { StyledCheckboxList } from "./styledCheckboxList";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addItemInListOfCurrentFilters, 
    getRefreshedFiltersState,
    replaceListOfCurrentFilters, 
    removeItemFromListOfCurrentFilters 
} from "../../../store/reducers/collectionFiltersReduser";
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
                dispatch(replaceListOfCurrentFilters([]));
                dispatch(addItemInListOfCurrentFilters(MAIN_FILTER_CHECKBOX));
            } 
        } else if (currentChangedCheckboxName !== MAIN_FILTER_CHECKBOX) {
            if (isMainCheckboxChecked) {
                dispatch(replaceListOfCurrentFilters([]));
            }
            if (isCurrentCheckboxChecked) {
                dispatch(addItemInListOfCurrentFilters(currentChangedCheckboxName));
            } else {
                dispatch(removeItemFromListOfCurrentFilters(currentChangedCheckboxName));
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