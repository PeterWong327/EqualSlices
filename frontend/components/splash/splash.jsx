import React from 'react';
// import { Link } from 'react-router-dom';
// import SessionForm from '../session_form/session_form';
// import { login } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';


const Splash = () => {

  const frontPage = () => (
    <div>
      <h4>Share bills and IOUs. Make sure everyone gets paid back.
        Totally free for web, iPhone, and Android.
      </h4>
      <h2>SPLIT EXPENSES WITH FRIENDS</h2>
      <img className="splash-phone-img" src={window.images.splash}></img>
    </div>
  )

  return frontPage();
};

export default Splash;
