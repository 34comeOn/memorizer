import styled from 'styled-components';
import variables from '../../../../sass/variables.module.scss';

export const StyledButton = styled.button`
    width: 120px;
    height: 35px;
    background-color: ${props => props.color};
    border: none;
    margin: 8px auto 8px 35px;
    border-radius: 15px;
    display: block;

    :hover {
        background-color: ${variables.colorButtonHover};
    }

    :active {
        background-color: ${variables.colorButtonActive};
    }
`
