import styled from 'styled-components';


type TisVisible = {
    isVisible: boolean;
  }

export const StyledAnswer = styled.div<TisVisible>`
    width: 400px; 
    min-height: 500px; 
    background-color: white;
    border-radius: 15px;
    padding: 15px;
    font-size: 17px;
    box-sizing: border-box;
    text-align: left;
    display: ${props => props.isVisible? 'block': 'none'};
`