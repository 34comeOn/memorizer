import styled from 'styled-components';
import variables from '../../../../sass/variables.module.scss';

export const StyledRepeatList = styled.ul`
    list-style: none;
    text-align: left;
    background-color: ${variables.colorBackgroundRepeatList};
    border-radius: 5px;
    padding: 4px;
    padding-top: 6px;
    box-sizing: border-box;
    min-height: 40px;
`