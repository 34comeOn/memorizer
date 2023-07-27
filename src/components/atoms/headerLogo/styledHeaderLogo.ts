import styled from "styled-components";
import { device } from '../../../global/theme/index';

export const StyledHeaderLogo = styled.div`
    width: 90px;
    height: 90px;
    position: relative;

    @media ${device.laptop} { 
        width: 75px;
        height: 75px;
    }
`