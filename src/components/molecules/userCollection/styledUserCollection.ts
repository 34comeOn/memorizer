import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';

export const StyledUserCollection = styled.li`
    width: 300px;
    height: 250px;
    background-color: ${variables.colorMenuPurple};
    margin: 15px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;