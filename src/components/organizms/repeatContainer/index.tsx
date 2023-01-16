import React, {useEffect, useState} from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { RepeatIn3DaysList } from '../../molecules/repeatLists/repeatIn3Days';
import { RepeatIn24HoursList } from '../../molecules/repeatLists/repeatIn24Hours';
import { RepeatIn12HoursList } from '../../molecules/repeatLists/repeatIn12Hours';
import { RepeatIn8HoursList } from '../../molecules/repeatLists/repeatIn8Hours';
import { RepeatIn4HoursList } from '../../molecules/repeatLists/repeatIn4HoursList';
import { RepeatInHourList } from '../../molecules/repeatLists/repeatInHourList';
import { RepeatNowList } from '../../molecules/repeatLists/repeatNowList';
import { repeatIn3DaysArray, repeatIn24HoursArray, repeatIn12HoursArray, repeatIn8HoursArray, repeatIn4HoursArray, repeatInHourArray, repeatNowArray, spreadCards } from '../../../utils/utils';


export const RepeatContainer = ({handleOpenCard}: {handleOpenCard: (id: number)=> void}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch('http://localhost:3002/data')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            spreadCards(typeof result === 'string'? JSON.parse(result): result)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return (
      <div>{`Error: ${error}`}</div>
      )
    } 
    else if (!isLoaded) {
      return (
      <div>Loading...</div>
      )
    } 
    else {
      return (
        <StyledRepeatContainer>
            <RepeatNowList handleOpenCard={handleOpenCard} renderData= {repeatNowArray} />
            <RepeatInHourList handleOpenCard={handleOpenCard} renderData= {repeatInHourArray} />
            <RepeatIn4HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn4HoursArray} />
            <RepeatIn8HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn8HoursArray} />
            <RepeatIn12HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn12HoursArray} />
            <RepeatIn24HoursList handleOpenCard={handleOpenCard} renderData= {repeatIn24HoursArray} />
            <RepeatIn3DaysList handleOpenCard={handleOpenCard} renderData= {repeatIn3DaysArray} />
        </StyledRepeatContainer>
      );
    }
}
