import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';

type TcollectionColor = {
    color: string;
  }

export const StyledUserCollection = styled.li<TcollectionColor>`
    width: 300px;
    height: 250px;
    background-color: ${props => props.color? props.color: variables.colorMenuPurple};
    margin: 15px;
    border-radius: 15px;
    padding-bottom: 7px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;