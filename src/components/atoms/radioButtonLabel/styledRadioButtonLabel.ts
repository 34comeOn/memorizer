import styled from "styled-components";

type TradioButtonLabel = {
    checked: boolean,
}

export const StyledRadioButtonLabel = styled.label<TradioButtonLabel>`
text-shadow: ${props => props.checked? 'black 1px 2px' : 'none'};
user-select: none;
`