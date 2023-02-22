import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [luzRoja, setluzRoja] = useState(false)
	const [luzAmarilla, setluzAmarilla] = useState(false)
	const [luzVerde, setluzVerde] = useState(false)

     function encenderR () {
		setluzRoja(prev => !prev)
		setluzAmarilla(prev => prev = false)
		setluzVerde(prev => prev = false)
	 }

	 function encenderA () {
		setluzAmarilla(prev => !prev)
		setluzRoja(prev => prev = false)
		setluzVerde(prev => prev = false)
	 }

	 function encenderV (){
		setluzVerde(prev => !prev)
		setluzRoja(prev => prev = false)
		setluzAmarilla(prev => prev = false)
	 }
	return (
		<div className="base"> 
			<button className={luzRoja ? "luzRoja encendida" : "luzRoja"} onClick={() => encenderR()}></button>
			<button className={luzAmarilla ? "luzAmarilla encendida" : "luzAmarilla"} onClick={() => encenderA()}></button>
			<button className={luzVerde ? "luzVerde encendida" : "luzVerde"} onClick={() => encenderV()}></button>
		</div>
	);
};
	export default Home;