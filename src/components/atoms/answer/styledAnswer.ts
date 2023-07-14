import styled from 'styled-components';
import variables from '../../../sass/variables.module.scss';

type TisVisible = {
  isVisible: boolean;
}

export const StyledAnswer = styled.div<TisVisible>`
    width: 400px; 
    min-height: 283px; 
    max-height: 470px; 
    overflow: scroll;
    background-color: ${variables.colorBackgroundLight};
    border-radius: 15px;
    padding: 15px;
    margin: 15px auto;
    font-size: 17px;
    box-sizing: border-box;
    text-align: left;
    display: ${props => props.isVisible? 'block': 'none'};
`