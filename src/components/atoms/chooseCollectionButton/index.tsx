import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import './style.scss';
import { useGetDataTriger } from "../../../myHooks/useGetDataTriger";
import { useChooseCollectionButton } from "../../../myHooks/collectionHooks/useChooseCollectionButton";
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";

type TmenuButton = {
    children: string, 
    color: string,
    disabled?: boolean,
    _id: string,
    onChangeLoadingStatus: (value: boolean)=> void,
}

export const ChooseCollectionButton = ({children, color, disabled, _id, onChangeLoadingStatus}: TmenuButton) => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const getDataByClick = useGetDataTriger();
    const getDataFromLocalStorageByClick = useChooseCollectionButton(_id, onChangeLoadingStatus);
    return(
        <StyledMenuButton onClick={accountStatus? getDataFromLocalStorageByClick: getDataByClick} disabled={disabled || false} color={color}>
            {children}
        </ StyledMenuButton>
    )
}