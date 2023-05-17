import React from 'react';
import './App.css';
import { CheckboxList } from './components/molecules/checkboxList';
import { CardWindow } from './components/organizms/card';
import { Header } from './components/organizms/header';
import { RepeatContainer } from './components/organizms/repeatContainer';
import { GetDataButton } from './components/atoms/getDataButton';

const App = () => {

  return (
    <>
      <Header />
      <div className='App App--container'>
        <div className='App--button__wrapper'>
          <GetDataButton />
          <CheckboxList />
        </div>
        <RepeatContainer />
        <CardWindow />
      </div>
    </>
  );
}

export default App;
