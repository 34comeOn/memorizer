import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';

export const StyledAccountNavButton = styled.button`
    height: 50px;
    width: max-content;
    background-color: ${variables.colorBackgroundLight};
    border-radius: 10px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: ${variables.colorButtonHover};
    }
`