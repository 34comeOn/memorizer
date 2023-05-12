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
  getRepeatNowGroupState,
    repeatNowGroupReduser, 
  } from './store/reducers/collectionGroupsReduser';
import { spreadCollectionData } from './utils/utils';
import { refreshFilters } from './store/reducers/checkboxReduser';

const stockCard = {
  '_id': '0',   
  repeatedTimeStamp: 1671420000000,
  timesBeenRepeated: 0,
  title: 'Test',
  answer: 'Answer',
}

const App = () => {
  const [isFetchedData, setIsFetchedData] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [shouldRerander, setShouldRerander,] = useState(false);
  const [card, setCard] = useState<Tcard>(stockCard);
  const [getCollectionDataTriger] = collectionDataAPI.useGetCollectionDataMutation();
  const dispatch = useAppDispatch();
  const orgonizedGroups = useAppSelector(getRepeatNowGroupState);

  const findCardInDataBase = (id: string, dataBaseArray: Tcard[]) => {
    return dataBaseArray.find(card => card['_id'] === id) || stockCard;
  }

  const handleGetDataClick = () => {
    setIsFetchedData(!isFetchedData);

    getCollectionDataTriger('/data')
    .unwrap()
    .then((response) => {
    const {filtersOfCollection, orgonizedGroupsOfCollection}= spreadCollectionData(response);

    dispatch(repeatNowGroupReduser(orgonizedGroupsOfCollection)); 
    dispatch(refreshFilters(filtersOfCollection)); 
    })
  }

  const handleOpenCard = (id: string) => {
    setIsCardVisible(true);
    setCard(findCardInDataBase(id, [...orgonizedGroups.flat()]))
  }

  const handleDoneClick = () => {
    setIsCardVisible(false);
    setShouldRerander(!shouldRerander);
  }

  return (
    <>
      <Header />
      <div className='App App--container'>
      <div className='App--button__wrapper'>
        <button className='App--button__getData' onClick={() => handleGetDataClick() }>My Q&A</button>
        <CheckboxList />
      </div>
      <RepeatContainer handleOpenCard={handleOpenCard} shouldRerander={shouldRerander} />
      {isCardVisible && <Card card={card} handleDoneClick= {handleDoneClick}/>}
    </div>
    </>
  );
}

export default App;
