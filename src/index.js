import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/UserStore.js'
import DeviceStore from './store/DeviceStore.js'

export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);
