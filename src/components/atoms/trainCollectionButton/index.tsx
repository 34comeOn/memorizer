import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import { Link } from "react-router-dom";
import './style.scss';
// import { useGetDataTriger } from "../../../myHooks/useGetDataTriger";
import { useTrainCollectionButton } from "../../../myHooks/collectionHooks/useTrainCollectionButton";

type TmenuButton = {
    children: string, 
    path: string, 
    color: string,
    disabled?: boolean,
    collectionId: string,
}

export const TrainCollectionButton = ({children, path, color, disabled, collectionId}: TmenuButton) => {
    // const getDataByClick = useGetDataTriger();
    const getDataFromLocalStorageByClick = useTrainCollectionButton(collectionId);
    return(
        <Link to={path} className='train-collection--link'>
            <StyledMenuButton onClick={getDataFromLocalStorageByClick} disabled={disabled || false} color={color}>
                {children}
            </ StyledMenuButton>
        </ Link>
    )
}