import React, { Component } from 'react';
import './FilmDisc.css';
import hell from '../Images/hell.jpg'

class Hell extends Component {

	render() { 
	
    return (
	<div className="bg6">
		<div className="Movie">
		
		
			<div>
				<img className='Poster' src={hell} alt="hell" />	
			</div>
		
			<div className='fblock'>
			<h3>Хеллбой</h3>
			<p className="slogan">Легенда возвращается</p>
			<p className="text">Хеллбой отправляется в Англию на встречу с женой Мерлина — Кровавой королевой. От исхода этой битвы зависит судьба всего мира.</p>
			
			<div className="infa">
			<div className="janri"><p>Фантастика, Фэнтези, Боевик, Приключения</p></div>
			<div className="dopinfa">
				<div className="data">
				<p className="PodZag">Релиз:</p>
				<p className="Zag">10-01-2019</p>
				</div>
				<div className="data">
				<p className="PodZag">Время:</p>
				<p className="Zag">148 мин</p>
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
export default Hell;