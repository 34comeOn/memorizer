import React from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { useAppSelector } from '../../../app/hooks';
import { getRepeatGroupsSelector } from '../../../store/reducers/collectionGroupsReducer';
import { StockRepeatList } from '../../molecules/stock/repeatList';
import { REPEAT_LISTS_TITLE } from '../../../constants/stringConstants';

export const RepeatContainer = () => {
  const repeatGroups = useAppSelector(getRepeatGroupsSelector);

  return (
    <StyledRepeatContainer>
      {repeatGroups.map((group,index) => {
        return(
          <StockRepeatList key={index} title={REPEAT_LISTS_TITLE[index]} list={group}/>
        )
      })}
    </StyledRepeatContainer>
  );
}
