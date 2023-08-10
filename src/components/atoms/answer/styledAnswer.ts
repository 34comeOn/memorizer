import styled from 'styled-components';
import variables from '../../../sass/variables.module.scss';

type TisVisible = {
  isVisible: boolean;
}

export const StyledAnswer = styled.pre<TisVisible>`
    width: 400px; 
    height: 283px; 
    max-height: 283px; 
    overflow: scroll;
    background-color: ${variables.colorBackgroundLight};
    border-radius: 15px;
    padding: 15px;
    margin: 15px auto;
    font-size: 17px;
    font-family: ${variables.ffMainRegular};
    box-sizing: border-box;
    text-align: left;
    display: ${props => props.isVisible? 'block': 'none'};
`