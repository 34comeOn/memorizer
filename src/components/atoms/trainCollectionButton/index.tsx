import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import './style.scss';
import { useGetDataTriger } from "../../../myHooks/useGetDataTriger";
import { useTrainCollectionButton } from "../../../myHooks/collectionHooks/useTrainCollectionButton";
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector } from "../../../store/reducers/accountReduser";

type TmenuButton = {
    children: string, 
    color: string,
    disabled?: boolean,
    _id: string,
}

export const TrainCollectionButton = ({children, color, disabled, _id}: TmenuButton) => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const getDataByClick = useGetDataTriger();
    const getDataFromLocalStorageByClick = useTrainCollectionButton(_id);
    return(
        <StyledMenuButton onClick={accountStatus? getDataFromLocalStorageByClick: getDataByClick} disabled={disabled || false} color={color}>
            {children}
        </ StyledMenuButton>
    )
}