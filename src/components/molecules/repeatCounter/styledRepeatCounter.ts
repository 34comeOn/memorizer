import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';

type TbackgroundColor = {
    containerBackgroundColor: string
}

export const StyledRrepeatContainer = styled.div<TbackgroundColor>`
width: 21px;
height: 21px;
border-radius: 40%;
background-color: ${props => props.containerBackgroundColor};
position: absolute;
right: -14px;
top: 4px;
display: flex;
align-items: center;
justify-content: center;
color: white;
border: 3px solid ${variables.colorBorder};
`