import styled from "styled-components";

type TrepeatListItem = {
    color: string
}

export const StyledRepeatListItem = styled.li<TrepeatListItem>`
    background-color: ${props => props.color}
`