import React,{useState} from 'react';
import './App.css';
import { CheckboxList } from './components/molecules/checkboxList';
import { Card } from './components/organizms/card';
import { Header } from './components/organizms/header';
import { RepeatContainer } from './components/organizms/repeatContainer';
import { collectionDataAPI } from './RTKApi/collectionDataApi';
import { Tcard } from './utils/utils';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  getRepeatGroupsState,
    repeatNowGroupReduser, 
  } from './store/reducers/collectionGroupsReduser';
import { spreadCollectionData } from './utils/utils';
import { setFiltersList } from './store/reducers/collectionFiltersReduser';

const stockCard = {
  '_id': '0',   
  repeatedTimeStamp: 1671420000000,
  timesBeenRepeated: 0,
  title: 'Test',
  answer: 'Answer',
}

const App = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [card, setCard] = useState<Tcard>(stockCard);

  const dispatch = useAppDispatch();
  const orgonizedGroups = useAppSelector(getRepeatGroupsState);
  const [getCollectionDataTriger] = collectionDataAPI.useGetCollectionDataMutation();

  const findCardInDataBase = (id: string, dataBaseArray: Tcard[]) => {
    return dataBaseArray.find(card => card['_id'] === id) || stockCard;
  }

  const handleGetDataClick = () => {
    getCollectionDataTriger('/data')
    .unwrap()
    .then((response) => {
    const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(response);

    dispatch(repeatNowGroupReduser(orgonizedGroupsOfCollection)); 
    dispatch(setFiltersList(filtersOfCollection)); 
    })
  }

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
        <button className='App--button__getData' onClick={() => handleGetDataClick() }>My Q&A</button>
        <CheckboxList />
      </div>
      <RepeatContainer handleOpenCard={handleOpenCard} />
      {isCardVisible && <Card card={card} handleDoneClick= {handleDoneClick}/>}
    </div>
    </>
  );
}

export default App;
