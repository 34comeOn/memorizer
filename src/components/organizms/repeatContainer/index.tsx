import React from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { RepeatIn3DaysList } from '../../molecules/repeatLists/repeatIn3Days';
import { RepeatIn24HoursList } from '../../molecules/repeatLists/repeatIn24Hours';
import { RepeatIn12HoursList } from '../../molecules/repeatLists/repeatIn12Hours';
import { RepeatIn8HoursList } from '../../molecules/repeatLists/repeatIn8Hours';
import { RepeatIn4HoursList } from '../../molecules/repeatLists/repeatIn4HoursList';
import { RepeatInHourList } from '../../molecules/repeatLists/repeatInHourList';
import { RepeatNowList } from '../../molecules/repeatLists/repeatNowList';
import { useAppSelector } from '../../../app/hooks';
import { getRepeatGroupsState } from '../../../store/reducers/collectionGroupsReduser';

export const RepeatContainer = () => {

  const [
  repeatNowGroup,
  repeatIn1HourGroup,
  repeatIn4HoursGroup,
  repeatIn8HoursGroup,
  repeatIn12HoursGroup,
  repeatIn24HoursGroup,
  repeatIn3DaysGroup
  ] = useAppSelector(getRepeatGroupsState);

  return (
    <StyledRepeatContainer>
        <RepeatNowList renderData= {repeatNowGroup} />
        <RepeatInHourList renderData= {repeatIn1HourGroup} />
        <RepeatIn4HoursList renderData= {repeatIn4HoursGroup} />
        <RepeatIn8HoursList  renderData= {repeatIn8HoursGroup} />
        <RepeatIn12HoursList renderData= {repeatIn12HoursGroup} />
        <RepeatIn24HoursList renderData= {repeatIn24HoursGroup} />
        <RepeatIn3DaysList renderData= {repeatIn3DaysGroup} />
    </StyledRepeatContainer>
  );
}
