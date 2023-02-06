import React,{useState} from 'react';
import './App.css';
import { CheckboxList } from './components/molecules/checkboxList';
import { Card } from './components/organizms/card';
import { Header } from './components/organizms/header';
import { RepeatContainer } from './components/organizms/repeatContainer';
import { repeatIn12HoursArray, repeatIn24HoursArray, repeatIn3DaysArray, repeatIn4HoursArray, repeatIn8HoursArray, repeatInHourArray, repeatNowArray, Tcard } from './utils/utils';

const stockCard = {
  ['_id']: '0',   
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
  

  const findCardInDataBase = (id: string, dataBaseArray: Tcard[]) => {
    return dataBaseArray.find(card => card['_id'] === id) || stockCard;
  }

  const handleGetDataClick = () => {
    setIsFetchedData(!isFetchedData);
  }

  const handleOpenCard = (id: string) => {
    setIsCardVisible(true);
    setCard(findCardInDataBase(id, [...repeatNowArray,...repeatInHourArray,...repeatIn4HoursArray,...repeatIn8HoursArray,...repeatIn12HoursArray,...repeatIn24HoursArray,...repeatIn3DaysArray]));
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
        {isFetchedData && <CheckboxList />}
      </div>
      {isFetchedData && <RepeatContainer handleOpenCard={handleOpenCard} shouldRerander={shouldRerander} />}
      {isCardVisible && <Card card={card} handleDoneClick= {handleDoneClick}/>}
    </div>
    </>
  );
}

export default App;
