import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState("")

	function handleColor(event){
		let element = event.target.id;
		setColor(element)
	}
	return (
		<div className="container">
			<div className="caja1"></div>
			    <div className="Cajacontenedorabase">
					<div className="Cajacontenedora" onClick={handleColor}>
						<div id="red" className={`red-light light ${color === 'red' ? 'active' : ""}`}></div>
						<div id="yellow" className={`yellow-light light ${color === 'yellow' ? 'active' : ""}`}></div>
						<div id="green" className={`green-light light ${color === 'green' ? 'active' : ""}`}></div>
					</div>
				</div>

		</div>

	);
};

export default Home;
