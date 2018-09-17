import React from 'react';
import { Link } from 'react-router-dom';
// import SessionForm from '../session_form/session_form';
// import { login } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions';


const Splash = () => {

  const frontPage = () => (
    <div className="splash-elements">
      <div className="splash-intro-text">
        <h2 className="splash-intro-header">Slice Expenses With Friends</h2>
        <h4>Share bills and IOUs. Make sure everyone gets paid back.
          Totally free for web, iPhone, and Android.
        </h4>
      </div>
      <img className="splash-phone-img" src={window.images.splash}></img>
      <br/>
      <Link className="splash-signup-btn-top" to="/signup">Get started now!
        <div className="splash-signup-btn-itsfree">(it's free!)</div>
      </Link>

    <div className="splash-intro-text2">
      <h6>IOUs made easy.</h6>
      <br/>
        <h4>
        EqualSlices takes the trouble out of sharing expenses – with friends,
        with roommates, with anyone.
        </h4>
    </div>

    <div className="splash-intro-text-last">
      And best of all? It's totally free.
      Ready to give EqualSlices a spin?
      <br/>
      <br/>
      <Link className="splash-signup-btn-bottom" to="/signup">Sign Up!</Link>
    </div>

  </div>
  )

  return frontPage();
};

export default Splash;
