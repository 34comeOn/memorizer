import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import './style.scss';
import { useGetStockDataTriger } from "../../../myHooks/useGetStockDataTriger";
import { useChooseCollectionButton } from "../../../myHooks/collectionHooks/useChooseCollectionButton";
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector } from "../../../store/reducers/accountReducer";

type TmenuButton = {
    children: string, 
    color: string,
    disabled?: boolean,
    _id: string,
    onChangeLoadingStatus: (value: boolean)=> void,
    openNotification: ((descriptionText: string) => void),
}

export const ChooseCollectionButton = ({children, color, disabled, _id, onChangeLoadingStatus, openNotification}: TmenuButton) => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const getDataFromLocalStorageByClick = useGetStockDataTriger();
    const getDataByClick = useChooseCollectionButton(_id, onChangeLoadingStatus, openNotification);
    return(
        <StyledMenuButton onClick={accountStatus? getDataByClick: getDataFromLocalStorageByClick} disabled={disabled || false} color={color}>
            {children}
        </ StyledMenuButton>
    )
}