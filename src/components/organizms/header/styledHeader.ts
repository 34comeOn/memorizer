import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';

export const StyledHeader = styled.header`
    height: 115px;
    background-color: ${variables.colorBackgroundDark};
    padding: 0 20px;
    position: relative;
    box-shadow: 0px 29px 24px -33px rgb(189 167 174);
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`