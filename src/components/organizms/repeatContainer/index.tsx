import React from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { RepeatIn4HoursList } from '../../molecules/repeatLists/repeatIn4HoursList';
import { RepeatInHourList } from '../../molecules/repeatLists/repeatInHourList';
import { RepeatNowList } from '../../molecules/repeatLists/repeatNowList';


export const RepeatContainer = () => {
    return(
        <StyledRepeatContainer>
            <RepeatNowList/>
            <RepeatInHourList/>
            <RepeatIn4HoursList/>
        </StyledRepeatContainer>
    )
}