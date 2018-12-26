import propTypes from 'prop-types';
import React from 'react';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends React.Component {
  onClickLogout = () => {
    // FIREBASE
    auth.signOut()
  }

  render() {
    const { props } = this;

    return (
      <div className="navbar">

        <div className="nav-container">
          <div className="logo">
            <div className="shadow">DreamCinema</div>
		  </div>
		  
		  <div>
		  <Link className="pad" to="/">Главная</Link>
		  </div>
		  <div>
		  <Link className="pad" to="/chat">Чат</Link>

		  </div>
          {props.isAuthorized
		  // eslint-disable-next-line
               ? <a className="pad" href="#" onClick={this.onClickLogout}>Выйти</a>
               : (
                 <div className="nav-links">
                   <button className="pad" href="#" onClick={this.renderModal}>Войти</button>
                 </div>
               )
          }
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: propTypes.bool.isRequired,
};

export default Navbar;
