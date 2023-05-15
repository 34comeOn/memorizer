import React from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { RepeatIn3DaysList } from '../../molecules/repeatLists/repeatIn3Days';
import { RepeatIn24HoursList } from '../../molecules/repeatLists/repeatIn24Hours';
import { RepeatIn12HoursList } from '../../molecules/repeatLists/repeatIn12Hours';
import { RepeatIn8HoursList } from '../../molecules/repeatLists/repeatIn8Hours';
import { RepeatIn4HoursList } from '../../molecules/repeatLists/repeatIn4HoursList';
import { RepeatInHourList } from '../../molecules/repeatLists/repeatInHourList';
import { RepeatNowList } from '../../molecules/repeatLists/repeatNowList';
import { ThandleOpenCard } from '../../molecules/stock/repeatList';
import { useAppSelector } from '../../../app/hooks';
import { getRepeatGroupsState } from '../../../store/reducers/collectionGroupsReduser';

export const RepeatContainer = ({handleOpenCard }: {handleOpenCard: ThandleOpenCard}) => {

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
        <RepeatNowList handleOpenCard={handleOpenCard} renderData= {repeatNowGroup} />
        <RepeatInHourList handleOpenCard={handleOpenCard} renderData= {repeatIn1HourGroup} />
        <RepeatIn4HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn4HoursGroup} />
        <RepeatIn8HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn8HoursGroup} />
        <RepeatIn12HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn12HoursGroup} />
        <RepeatIn24HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn24HoursGroup} />
        <RepeatIn3DaysList handleOpenCard={handleOpenCard} renderData= {repeatIn3DaysGroup} />
    </StyledRepeatContainer>
  );
}
