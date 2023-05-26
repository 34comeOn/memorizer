import React from "react";
import { StyledMenuButton } from "./styledMenuButton";
import { Link } from "react-router-dom";
import './style.scss';
import { useGetDataTriger } from "../../../myHooks/useGetDataTriger";

type TmenuButton = {
    children: string, 
    path: string, 
    color: string,
    disabled?: boolean,
}

export const TrainCollectionButton = ({children, path, color, disabled}: TmenuButton) => {
    const getDataByClick = useGetDataTriger();
    return(
        <Link to={path} className='train-collection--link'>
            <StyledMenuButton onClick={getDataByClick} disabled={disabled || false} color={color}>
                {children}
            </ StyledMenuButton>
        </ Link>
    )
}