import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organizms/header';

const App = () => 
<>
    <Header />
    <Outlet />
</>

export default App;
