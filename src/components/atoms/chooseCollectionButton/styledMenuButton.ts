import styled from "styled-components";
import { device } from '../../../global/theme/index';

export const StyledMenuButton = styled.button`
    width: 220px;
    height: 55px;
    background-color: ${props => props.color};
    border: none;
    margin: 8px auto 8px 39px;
    border-radius: 15px;
    display: block;
    box-shadow: 0px 2px 9px -4px black;
    cursor: pointer;

    @media ${device.laptop} { 
        width: 140px;
        height: 35px;
        margin: 4px auto 4px 30px;
        font-size: 11px;
        border-radius: 10px;
    }

    :hover {
        background-color: rgb(235, 142, 142);
    }

    :active {
        background-color: rgb(103, 117, 103);
    }
`