import styled from "styled-components";

type TradioButtonLabel = {
    checked: boolean,
}

export const StyledRadioButtonLabel = styled.label<TradioButtonLabel>`
    color: ${props => props.checked? 'white' : 'grey'};
    user-select: none;
`