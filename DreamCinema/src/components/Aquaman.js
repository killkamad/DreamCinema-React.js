import React, { Component } from 'react';
import './FilmDisc.css';
import aqua from '../Images/aqua.jpg'

class Aquaman extends Component {

	render() { 
	
    return (
	<div className="bg2">
		<div className="Movie">
		
		
			<div>
				<img className='Poster' src={aqua} alt="aqua" />	
			</div>
		
			<div className='fblock'>
			<h3>Аквамен</h3>
			<p className="slogan">Океан зовёт</p>
			<p className="text">Действие фильма разворачивается в необъятном и захватывающем подводном мире семи морей, а сюжет знакомит зрителей с историей происхождения получеловека-полуатланта Артура Карри и ключевыми событиями его жизни — теми</p>
			
			<div className="infa">
			<div className="janri"><p>Фантастика, Фэнтези, Боевик, Приключения</p></div>
			<div className="dopinfa">
				<div className="data">
				<p className="PodZag">Релиз:</p>
				<p className="Zag">13-12-2018</p>
				</div>
				<div className="data">
				<p className="PodZag">Время:</p>
				<p className="Zag">143 мин</p>
				</div>
								<div className="data">
				<p className="PodZag">Cборы:</p>
				<p className="Zag">$488,000,000</p>
				</div>
								<div className="data">
				<p className="PodZag">Средняя оценка:</p>
				<p className="Zag">7 / 10</p>
				</div>
			</div>
			
			</div>
		</div>
			

			
		</div>
	</div>
    );
  }
}
export default Aquaman;