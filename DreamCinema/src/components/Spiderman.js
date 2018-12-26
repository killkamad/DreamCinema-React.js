import React, { Component } from 'react';
import './FilmDisc.css';
import spider from '../Images/spiderp.jpg'

class Spiderman extends Component {

	render() { 
	
    return (
	<div className="bg1">
		<div className="Movie">
		
		
			<div>
				<img className='Poster' src={spider} alt="spider" />	
			</div>
		
			<div className='fblock'>
			<h3>Человек-паук: Через вселенные</h3>
			<p className="slogan">Enter a universe where more than one wears the mask</p>
			<p className="text">Американский анимационный фильм, основанный на персонаже Marvel Comics Майлзе Моралесе, произведенный Columbia Pictures и Sony Pictures Animation и распространенный Sony Pictures Releasing.</p>
			
			<div className="infa">
			<div className="janri"><p>Мультфильм, Фантастика, Боевик, Комедия, Приключения, Семейный</p></div>
			<div className="dopinfa">
				<div className="data">
				<p className="PodZag">Релиз:</p>
				<p className="Zag">13-12-2018</p>
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
				<p className="Zag">8.5 / 10</p>
				</div>
			</div>
			
			</div>
		</div>
			

			
		</div>
	</div>
    );
  }
}
export default Spiderman;