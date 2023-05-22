import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';

export const StyledUserCollectionsList = styled.ul`
    width: 1000px;
    min-height: 200px;
    background-color: ${variables.colorBackgroundRepeatList};
    list-style: none;
    border-radius: 15px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0px;
`