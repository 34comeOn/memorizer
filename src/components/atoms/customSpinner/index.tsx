import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import './style.scss';

export const CustomSpinner = ({isLoading}: {isLoading: boolean}) => {

    return(
        <div className="spinner-container">
            {isLoading && <Spin 
            className="spinner"
            indicator={
                <LoadingOutlined style={{ color: 'white' }} rev={undefined} />
            }
            size="large"/>}
        </div>
    )
}