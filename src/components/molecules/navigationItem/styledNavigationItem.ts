import styled from "styled-components";
import { device } from '../../../global/theme/index';

export const StyledNavigationItem = styled.li`
    margin-left: 50px;
    width: max-content;

    @media ${device.laptop} { 
        margin-left: 25px;
    }
`