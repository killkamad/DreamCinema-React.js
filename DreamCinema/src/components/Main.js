import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Spider from '../Images/spider.jpg'
import Aqua from '../Images/aqua.jpg'
import Bamb from '../Images/bamb.jpg'
import Ded from '../Images/ded.jpg'
import Glass from '../Images/glass.jpg'
import Hell from '../Images/hell.jpg'

class Main extends Component {

	render() { 
	
    return (
	<div className="telo">
	
	
	
		<div className='block1'>Сейчас в кино!</div>
		
		
		<Link to="/spider">
		<div className='block2'>
		<img className='imge' src={Spider} alt="da" />	
		<h3>Человек-паук: Через вселенные</h3>
		<p className="font1">Американский анимационный фильм, основанный на персонаже Marvel Comics Майлзе Моралесе, произведенный Columbia Pictures и Sony Pictures Animation и распространенный Sony Pictures Releasing.</p>
		</div>
		</Link>
		
		<Link to="/aquaman">
		<div className='block2'>
		<img className='imge' src={Aqua} alt="da" />	
		<h3>Аквамен</h3>
		<p className="font1">«Акваме́н» — американский супергеройский фильм режиссёра Джеймса Вана об Артуре Карри, который, обладая внушительной силой, скоростью и способностью дышать под водой, становится супергероем Акваменом.</p>
		</div>
		</Link>
		
		<Link to="/bamblbe">
		<div className='block2'>
		<img className='imge' src={Bamb} alt="da" />	
		<h3>Бамблби</h3>
		<p className="font1">«Ба́мблби» — американский научно-фантастический боевик. Это спин-офф и приквел фильма Трансформеры, сюжет которого закручен вокруг автобота Бамблби. Режиссёр — Трэвис Найт. </p>
		</div>
		</Link>
		
		<Link to="/Deadpool">
		<div className='block2'>
		<img className='imge' src={Ded} alt="da" />	
		<h3>Жил-был Дэдпул</h3>
		<p className="font1">Единственный и неповторимый болтливый наемник — вернулся! Ещё более масштабный, ещё более разрушительный и даже ещё более голозадый, чем прежде! Когда в его жизнь врывается суперсолдат с убийственной миссией, Дэдпул вынужден задуматься о дружбе...</p>
		</div>
		</Link>
		
		<Link to="/glass">
		<div className='block2'>
		<img className='imge' src={Glass} alt="da" />	
		<h3>Стекло</h3>
		<p className="font1">«Стекло» — предстоящий американский супергеройский фильм в жанре научно-фантастического триллера режиссёра М. Найта Шьямалана. В главных ролях Брюс Уиллис, Джеймс Макэвой и Сэмюэл Л. Джексон.</p>
		</div>
		</Link>
		
		<Link to="/hell">
		<div className='block2'>
		<img className='imge' src={Hell} alt="da" />	
		<h3>Хеллбой</h3>
		<p className="font1">«Хеллбо́й» — предстоящий американский супергеройский фильм в жанре фэнтези режиссёра Нила Маршалла. По сценарию Эндрю Косби, Кристофера Голдена, Арона Колейта и Майка Миньола, на основе комикса Миньола. В главной роли Дэвид Харбор.</p>
		</div>
		</Link>

		
		
	</div>	
    );
  }
}
export default Main;