import React,{useState} from 'react';
import './App.css';
import { Card } from './components/organizms/card';
import { RepeatContainer } from './components/organizms/repeatContainer';

function App() {
  const [isFetchedData, setIsFetchedData] = useState(false);

  const handleGetDataClick = () => {
    setIsFetchedData(!isFetchedData)
  }

  return (
    <div className="App App--container">
      {isFetchedData && <RepeatContainer />}
      <Card/>
      <button style={{height: '50px', backgroundColor: 'red', marginTop: '20px', borderRadius: '10px'}} onClick={() => handleGetDataClick() }>GET DATA</button>
    </div>
  );
}

export default App;
