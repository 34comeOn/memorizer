import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import { Link } from "react-router-dom";
import './style.scss';
import { useGetDataTriger } from "../../../myHooks/useGetDataTriger";
import { useTrainCollectionButton } from "../../../myHooks/collectionHooks/useTrainCollectionButton";
import { useAppSelector } from "../../../app/hooks";
import { getAccountStatusSelector } from "../../../store/reducers/accountReduser";

type TmenuButton = {
    children: string, 
    path: string, 
    color: string,
    disabled?: boolean,
    _id: string,
}

export const TrainCollectionButton = ({children, path, color, disabled, _id}: TmenuButton) => {
    const accountStatus = useAppSelector(getAccountStatusSelector);
    const getDataByClick = useGetDataTriger();
    const getDataFromLocalStorageByClick = useTrainCollectionButton(_id);
    return(
        <Link to={path} className='train-collection--link'>
            <StyledMenuButton onClick={accountStatus? getDataFromLocalStorageByClick: getDataByClick} disabled={disabled || false} color={color}>
                {children}
            </ StyledMenuButton>
        </ Link>
    )
}