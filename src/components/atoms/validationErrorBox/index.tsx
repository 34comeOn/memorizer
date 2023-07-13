import React from "react";
import './style.scss';

export const ValidationErrorBox = ({error}: {error: string}) => {
    return(
        <div className="validation-error--box">
            {error}
        </div>
    )
}