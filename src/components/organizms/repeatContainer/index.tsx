import React, {useEffect, useState} from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { RepeatIn4HoursList } from '../../molecules/repeatLists/repeatIn4HoursList';
import { RepeatInHourList } from '../../molecules/repeatLists/repeatInHourList';
import { RepeatNowList } from '../../molecules/repeatLists/repeatNowList';
import { repeatIn4HoursArray, repeatInHourArray, repeatNowArray, spreadCards } from '../../../utills/utills';


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
        </StyledRepeatContainer>
      );
    }
}
