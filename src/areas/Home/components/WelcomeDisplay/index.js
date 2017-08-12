import React from 'react';
import Login from '../Login';

import './styles.scss';

const WelcomeDisplay = props => {
  return (
    <div className="__welcome-text">
      <h3>Welcome to the site</h3>
      Welcome to florida Framing Supplies, Jacksonville's
      number one wholesaler of mats and mouldings.
      We supply custom cut mats, mat board, picture
      frames & framing supplies at wholesale prices to
      your needs. All of our supplies are of the highest
      quality and are manufactured by one of the following:
      <ul>
        <li>
          <a target="__blank" href="http://www.crescentcardboard.com/#home">
            Crescent
          </a>
        </li>
        <li>
          <a target="__blank" href="https://tru-vue.com/">Tru Vue</a>
        </li>
        <li>
          <a target="__blank" href="https://www.nielsen-design.de/en-EN/home/">
            NielsenBainBridge
          </a>
        </li>
      </ul>
      <Login {...props} />
    </div>
  );
};

export default WelcomeDisplay;
