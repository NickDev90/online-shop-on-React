import React, { useContext, useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter.js';
import NavBar from './components/NavBar.js'
import './App.css';
import { observer } from 'mobx-react-lite';
import { Context } from './index.js';
import { check } from './http/userAPI.js';
import { Spinner } from 'react-bootstrap';

const App = observer( () => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    check().then(data => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally( ()=> setLoading(false))
  }, []);

  if(loading) {
    return <Spinner animation={'grow'}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
