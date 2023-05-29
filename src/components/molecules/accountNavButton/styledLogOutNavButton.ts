import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import url from '../../../accets/signLogo/sign-out-logo.png';

export const StyledLogOutNavButton = styled.button`
    height: 32px;
    width: 32px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 4px;
        display: block;
        width: 28px;
        height: 28px;
        top: 2px;
        background-image: url('${url}');
        background-size: contain;
        background-repeat: no-repeat;
    }

    &:hover {
        background-color: ${variables.colorButtonHover};
    }
`