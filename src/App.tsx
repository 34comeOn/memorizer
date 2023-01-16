import React,{useState} from 'react';
import './App.css';
import { Card } from './components/organizms/card';
import { RepeatContainer } from './components/organizms/repeatContainer';
import { repeatIn4HoursArray, repeatInHourArray, repeatNowArray, Tcard } from './utils/utils';

const stockCard = {
  id: 0,   
  repeatedTimeStamp: 1671420000000,
  timesBeenRepeated: 0,
  title: 'Test',
  answer: 'Answer',
}

const App = () => {
  const [isFetchedData, setIsFetchedData] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [card, setCard] = useState<Tcard>(stockCard);

  const findCardInDataBase = (id: number, dataBaseArray: Tcard[]) => {
    return dataBaseArray.find(card => card.id === id) || stockCard;
  }

  const handleGetDataClick = () => {
    setIsFetchedData(!isFetchedData);
  }

  const handleOpenCard = (id: number) => {
    setIsCardVisible(true);
    setCard(findCardInDataBase(id, [...repeatNowArray,...repeatInHourArray,...repeatIn4HoursArray]));
  }

  return (
    <div className="App App--container">
      <button style={{height: '50px', backgroundColor: 'red', marginTop: '20px', borderRadius: '10px', marginRight: '20px'}} onClick={() => handleGetDataClick() }>GET DATA</button>
      {isFetchedData && <RepeatContainer handleOpenCard={handleOpenCard} />}
      {isCardVisible && <Card card={card} />}
    </div>
  );
}

export default App;
