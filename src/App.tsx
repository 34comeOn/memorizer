import React,{useState} from 'react';
import './App.css';
import { CheckboxList } from './components/molecules/checkboxList';
import { Card } from './components/organizms/card';
import { Header } from './components/organizms/header';
import { RepeatContainer } from './components/organizms/repeatContainer';
import { Tcard } from './utils/utils';
import { 
  useAppSelector } from './app/hooks';
import {
  getRepeatGroupsState,
  } from './store/reducers/collectionGroupsReduser';
import { STOCK_COLLECTION_ITEM } from './constants/stockConstants';
import { findCardInDataBase } from './utils/utils';
import { GetDataButton } from './components/atoms/getDataButton';

const App = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [card, setCard] = useState<Tcard>(STOCK_COLLECTION_ITEM);

  const orgonizedGroups = useAppSelector(getRepeatGroupsState);

  const handleOpenCard = (id: string) => {
    setIsCardVisible(true);
    setCard(findCardInDataBase(id, [...orgonizedGroups.flat()]))
  }

  const handleDoneClick = () => {
    setIsCardVisible(false);
  }

  return (
    <>
      <Header />
      <div className='App App--container'>
        <div className='App--button__wrapper'>
          <GetDataButton />
          <CheckboxList />
        </div>
        <RepeatContainer handleOpenCard={handleOpenCard} />
        {isCardVisible && <Card card={card} handleDoneClick= {handleDoneClick}/>}
      </div>
    </>
  );
}

export default App;
