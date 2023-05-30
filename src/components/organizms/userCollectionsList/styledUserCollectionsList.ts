import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';

export const StyledUserCollectionsList = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;

    
    max-width: 1400px;
    min-height: 200px;
    background-color: ${variables.colorBackgroundRepeatList};
    list-style: none;
    border-radius: 15px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0px;
`