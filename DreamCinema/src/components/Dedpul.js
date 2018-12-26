import React, { Component } from 'react';
import './FilmDisc.css';
import ded from '../Images/ded.jpg'

class Dedpul extends Component {

	render() { 
	
    return (
	<div className="bg1">
		<div className="Movie">
		
		
			<div>
				<img className='Poster' src={ded} alt="ded" />	
			</div>
		
			<div className='fblock'>
			<h3>Жил-был Дэдпул</h3>
			<p className="slogan">Сказочно приличная версия</p>
			<p className="text">Единственный и неповторимый болтливый наемник — вернулся! Ещё более масштабный, ещё более разрушительный и даже ещё более голозадый, чем прежде! Когда в его жизнь врывается суперсолдат с убийственной миссией, Дэдпул вынужден задуматься о дружбе, семье и о том, что на самом деле значит быть героем, п… </p>
			
			<div className="infa">
			<div className="janri"><p>Комедия, Боевик, Фантастика</p></div>
			<div className="dopinfa">
				<div className="data">
				<p className="PodZag">Релиз:</p>
				<p className="Zag">3-01-2019</p>
				</div>
				<div className="data">
				<p className="PodZag">Время:</p>
				<p className="Zag">117 мин</p>
				</div>
								<div className="data">
				<p className="PodZag">Cборы:</p>
				<p className="Zag">$129,535,063</p>
				</div>
								<div className="data">
				<p className="PodZag">Средняя оценка:</p>
				<p className="Zag">8.3 / 10</p>
				</div>
			</div>
			
			</div>
		</div>
			

			
		</div>
	</div>
    );
  }
}
export default Dedpul;