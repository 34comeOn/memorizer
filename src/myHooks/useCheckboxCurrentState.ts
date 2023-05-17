import { useAppSelector } from "../app/hooks";
import { MAIN_FILTER_CHECKBOX } from "../constants/stringConstants";
import { getUpdatedlistItemsCategories } from "../store/reducers/collectionFiltersReduser";

export const useCheckboxCurrentState = (name: string) => {
    const currentCheckedCheckboxes = useAppSelector(getUpdatedlistItemsCategories);
    const isCurrentCheckboxChecked =  currentCheckedCheckboxes.includes(name);
    const isMainCheckboxChecked = currentCheckedCheckboxes.includes(MAIN_FILTER_CHECKBOX);

    return {isCurrentCheckboxChecked, isMainCheckboxChecked};
}