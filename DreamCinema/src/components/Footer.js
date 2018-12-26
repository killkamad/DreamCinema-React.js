import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {

	render() { 
	
    return (

	<footer>
		<div className="footer_item">
		<h3>DreamCinema:</h3>
		
			<a href="https://steamcommunity.com/id/killka/">Steam profile</a>
			<a href="https://www.youtube.com/user/MyKillka">YouTube Channel</a>
			<a href="https://www.instagram.com/killka_m/">Instagram</a>
			<a href="https://www.twitch.tv/killka_master">Twitch</a>	
			<p className="copy">&copy; Mashtakov Kirill</p>
	
		</div>
	</footer>
	
    );
  }
}
export default Footer;