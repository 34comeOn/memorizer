import styled from "styled-components";

export const StyledMenuButton = styled.button`
    width: 220px;
    height: 55px;
    background-color: ${props => props.color};
    border: none;
    margin: 8px auto 8px 35px;
    border-radius: 15px;
    display: block;

    :hover {
        background-color: rgb(235, 142, 142);
    }

    :active {
        background-color: rgb(103, 117, 103);
    }
`