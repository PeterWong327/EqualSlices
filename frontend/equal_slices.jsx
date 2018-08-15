import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './actions/session_actions';
import  configureStore  from './store/store';
import Root from './components/root';
import { createFriend } from './actions/friending_actions';

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TESTING START
  // const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.createFriend = createFriend;
  //TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store ={ store} />, root);
});
