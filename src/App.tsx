import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/organizms/header';
import { EditModalWindow } from './components/organizms/editModal';

const App = () =>
<>
    <Header />
    <Outlet />
    <EditModalWindow />
</>

export default App;
