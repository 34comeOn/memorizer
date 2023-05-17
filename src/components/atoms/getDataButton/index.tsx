import React from "react";
import './style.css';
import { useGetDataTriger } from "../../../myHooks/useGetDataTriger";

export const GetDataButton = () => {
    const getDataByClick = useGetDataTriger();

    return (
        <button className='button__getData' onClick={() => getDataByClick() }>My Q&A</button>
    );
}