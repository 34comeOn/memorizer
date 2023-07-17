import { useAppSelector } from "../app/hooks";
import { MAIN_FILTER_CHECKBOX } from "../constants/stringConstants";
import { getListOfCurrentFiltersSelector } from "../store/reducers/collectionFiltersReducer";

export const useCheckboxCurrentState = (name: string) => {
    const currentCheckedCheckboxes = useAppSelector(getListOfCurrentFiltersSelector);
    const isCurrentCheckboxChecked =  currentCheckedCheckboxes.includes(name);
    const isMainCheckboxChecked = currentCheckedCheckboxes.includes(MAIN_FILTER_CHECKBOX);

    return {isCurrentCheckboxChecked, isMainCheckboxChecked};
}