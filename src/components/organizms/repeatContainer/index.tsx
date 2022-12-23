import React, {useEffect, useState} from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { RepeatIn4HoursList } from '../../molecules/repeatLists/repeatIn4HoursList';
import { RepeatInHourList } from '../../molecules/repeatLists/repeatInHourList';
import { RepeatNowList } from '../../molecules/repeatLists/repeatNowList';
import { repeatIn4HoursArray, repeatInHourArray, repeatNowArray, spreadCards } from '../../../mock/mockData';


export const RepeatContainer = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [array, setArray] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/some')
        .then(res => res.json())
        .then(
          (result) => {
              setIsLoaded(true);
              setArray(result)
              spreadCards(typeof result === 'string'? JSON.parse(result): result)

          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    console.log(typeof array === 'string'? JSON.parse(array): array)
  
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
            <RepeatNowList renderData= {repeatNowArray} />
            <RepeatInHourList renderData= {repeatInHourArray} />
            <RepeatIn4HoursList renderData= {repeatIn4HoursArray} />
        </StyledRepeatContainer>
      );
    }
}
