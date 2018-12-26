import propTypes from 'prop-types';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/LandingContainer';
import Messages from './components/MessagesContainer';
import Navbar from './components/Layout/NavbarContainer';
import { auth, db } from './firebase';
import Main from './components/Main'
import Footer from './components/Footer'
import Spiderman from './components/Spiderman'
import Aquaman from './components/Aquaman'
import Bamblbe from './components/Bamblbe'
import Dedpul from './components/Dedpul'
import Glass from './components/Glass'
import Hell from './components/Hell'

class App extends React.Component {
  componentWillMount() {
    // FIREBASE
    this.unsubscribeQueryListener = db.collection('messages').orderBy('timeStamp')
      .onSnapshot(querySnapshot => this.props.fetchMessagesSuccess(querySnapshot));

    // FIREBASE
    this.unsubscribeAuthListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.authorizeUser(user.uid);
      } else {
        this.props.signOut();
      }
    });
  }

  componentWillUnmount() {
    // FIREBASE
    this.unsubscribeQueryListener();
    // FIREBASE
    this.unsubscribeAuthListener();
  }

  render() {
    return (
	<BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
		<Switch>
			<Route exact path="/chat" component={Landing} />
			<Route exact path="/messages" component={Messages} />
			<Route exact path="/" component={Main} />
			<Route exact path="/spider" component={Spiderman} />
			<Route exact path="/aquaman" component={Aquaman} />
			<Route exact path="/Bamblbe" component={Bamblbe} />
			<Route exact path="/Deadpool" component={Dedpul} />
			<Route exact path="/glass" component={Glass} />	
			<Route exact path="/hell" component={Hell} />	
		</Switch>
		<Footer />
        </div>
      </div>
	 </BrowserRouter>
    );
  }
}

App.propTypes = {
  authorizeUser: propTypes.func.isRequired,
  fetchMessagesSuccess: propTypes.func.isRequired,
  signOut: propTypes.func.isRequired,
};

export default App;
