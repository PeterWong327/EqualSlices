import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './actions/session_actions';
import  configureStore  from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {

  //TESTING START
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  //TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store ={ store} />, root);
});
