import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const CustomSpinner = ({isLoading}: {isLoading: boolean}) => {
    return(
        <div style={{position: 'relative'}}>
            {isLoading && <Spin 
            style={{position: 'absolute', top: '-30px', left: '190px', transform: 'scale(3)'}} 
            indicator={
                <LoadingOutlined style={{ color: 'white' }} rev={undefined} />
            }
            size="large"/>}
        </div>
    )
}