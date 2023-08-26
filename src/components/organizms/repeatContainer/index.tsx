import React from 'react';
import { StyledRepeatContainer } from './styledRepeatContainer';
import { useAppSelector } from '../../../app/hooks';
import { getRepeatGroupsSelector } from '../../../store/reducers/collectionGroupsReducer';
import { StockRepeatList } from '../../molecules/stock/repeatList';
import { REPEAT_LISTS_TITLE } from '../../../constants/stringConstants';
import { useForceRender } from '../../../myHooks/utillsHooks/useForceRender';
import { getAccountStatusSelector } from '../../../store/reducers/accountReducer';
import { getCurrentCollectionSelector } from '../../../store/reducers/userCollectionsReducer';
import { addOverlay, spreadCollectionData } from '../../../utils/utils';

export const RepeatContainer = () => {
  const accountStatus = useAppSelector(getAccountStatusSelector);
  const repeatGroups = useAppSelector(getRepeatGroupsSelector);
  
  const currentCollection = useAppSelector(getCurrentCollectionSelector);
  const { orgonizedGroupsOfCollection } = spreadCollectionData(addOverlay(currentCollection).collectionData);
    
  // @ts-ignore
  const {forceState} = useForceRender();

  return (
    <StyledRepeatContainer>
      {(accountStatus? repeatGroups: orgonizedGroupsOfCollection).map((group,index) => {
        return(
          <StockRepeatList key={index} title={REPEAT_LISTS_TITLE[index]} list={group}/>
        )
      })}
    </StyledRepeatContainer>
  );
}
