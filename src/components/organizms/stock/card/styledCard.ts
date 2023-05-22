import styled from 'styled-components';
import variables from '../../../../sass/variables.module.scss';

export const StyledCard = styled.div`
    width: 500px;
    min-height: 700px;
    height: min-content;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${variables.colorBackgroundRepeatList};
    margin: 55px auto;
    border-radius: 5px;
    position: sticky;
    top: 20px;
`