import React, { Component } from 'react';
import './FilmDisc.css';
import glass from '../Images/glass.jpg'

class Glass extends Component {

	render() { 
	
    return (
	<div className="bg5">
		<div className="Movie">
		
		
			<div>
				<img className='Poster' src={glass} alt="spider" />	
			</div>
		
			<div className='fblock'>
			<h3>Стекло</h3>
			<p className="slogan">Дай волю своим демонам</p>
			<p className="text">охититель с множественным расстройством личности и террорист-инвалид Мистер Стекло выходят на своих давних противников — травмированную девочку-подростка Кейси и стареющего супергероя Дэвида Данна.</p>
			
			<div className="infa">
			<div className="janri"><p>Фантастика, Триллер, Драма, Детектив</p></div>
			<div className="dopinfa">
				<div className="data">
				<p className="PodZag">Релиз:</p>
				<p className="Zag">17-01-2019</p>
				</div>
				<div className="data">
				<p className="PodZag">Время:</p>
				<p className="Zag">129 мин</p>
				</div>
				<div className="data">
				<p className="PodZag">Cборы:</p>
				<p className="Zag">$129,535,063</p>
				</div>
				<div className="data">
				<p className="PodZag">Средняя оценка:</p>
				<p className="Zag">10 / 10</p>
				</div>
			</div>
			
			</div>
		</div>
			

			
		</div>
	</div>
    );
  }
}
export default Glass;