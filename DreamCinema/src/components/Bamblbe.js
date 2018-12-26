import React, { Component } from 'react';
import './FilmDisc.css';
import bamb from '../Images/bamb.jpg'

class Bamblbe extends Component {

	render() { 
	
    return (
	<div className="bg3">
		<div className="Movie">
		
		
			<div>
				<img className='Poster' src={bamb} alt="bamb" />	
			</div>
		
			<div className='fblock'>
			<h3>Бамблби</h3>
			<p className="slogan">У каждого приключения есть начало</p>
			<p className="text">1987 год. Скрываясь от преследования, Бамблби находит убежище на автомобильной свалке в калифорнийском городке, где живет Чарли. Девушке скоро исполнится 18, она стремится найти свое место в жизни.</p>
			
			<div className="infa">
			<div className="janri"><p>Фантастика, Боевик, Приключения</p></div>
			<div className="dopinfa">
				<div className="data">
				<p className="PodZag">Релиз:</p>
				<p className="Zag">15-12-2018</p>
				</div>
				<div className="data">
				<p className="PodZag">Время:</p>
				<p className="Zag">114 мин</p>
				</div>
								<div className="data">
				<p className="PodZag">Cборы:</p>
				<p className="Zag">$129,535,063</p>
				</div>
								<div className="data">
				<p className="PodZag">Средняя оценка:</p>
				<p className="Zag">6.3 / 10</p>
				</div>
			</div>
			
			</div>
		</div>
			

			
		</div>
	</div>
    );
  }
}
export default Bamblbe;