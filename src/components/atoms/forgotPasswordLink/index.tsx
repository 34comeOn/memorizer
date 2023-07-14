import React from "react";
import { Link } from "react-router-dom";
import { FORGOT_PASSWORD_LINK, ROUTS_CONSTANTS } from "../../../constants/stringConstants";
import './style.scss';

export const ForgotPasswordLink= () => {
    return(
        <Link to={`/${ROUTS_CONSTANTS.FORGOT_PASSWORD_PAGE}`} className="forgot-password--link" >
            {FORGOT_PASSWORD_LINK}
        </ Link>
    )
}