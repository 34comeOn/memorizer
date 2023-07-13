import React, { useState } from "react";
import { Field} from "formik";
import './style.scss';
import { IconButton } from "@mui/material";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

type TformInput = {
    type: string;
    name: string;
    labelValue: string;
    placeholder?: string,
    width?: string,
    disabled?: boolean,
};

export const PasswordInput = ({labelValue, name, placeholder, type, width, disabled }: TformInput) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const handleClickShowPassword = () => setIsPasswordShown(!isPasswordShown);

    return(
        <div className='password-input--container'>
            <label className='password-input--label' htmlFor={labelValue}>
                {labelValue}
            </label>
            <Field 
                className='form--password-input'
                id={labelValue}
                name={name}
                type={isPasswordShown ? 'text' : type}
                placeholder={placeholder} 
                disabled={disabled || false}
                />
            <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDown}
                  edge='end'
                  style={{position: 'absolute'}}
                  className="password-visibility--button"
                  >
                  {isPasswordShown ? (
                      <EyeOutlined rev={undefined} />
                      ) : (
                          <EyeInvisibleOutlined rev={undefined}/>
                          )}
            </IconButton>
        </ div>
    )
}

