import React from "react";
import { Link } from "react-router-dom";
import { FORGOT_PASSWORD_LINK } from "../../../constants/stringConstants";
import './style.scss';

export const ForgotPasswordLink= () => {
    return(
        <Link to='/' className="forgot-password--link" >
            {FORGOT_PASSWORD_LINK}
        </ Link>
    )
}