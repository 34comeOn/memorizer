import { useAppSelector } from "../app/hooks";
import { getUpdatedlistItemsCategories } from "../store/reducers/checkboxReduser";

export const useCheckboxCurrentState = (name: string) => {
    const currentCheckedCheckboxes = useAppSelector(getUpdatedlistItemsCategories);
    const isCurrentCheckboxChecked =  currentCheckedCheckboxes.includes(name);
    const isMainCheckboxChecked = currentCheckedCheckboxes.includes('all');

    return {isCurrentCheckboxChecked, isMainCheckboxChecked};
}