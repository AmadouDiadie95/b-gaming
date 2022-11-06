import React, { useEffect, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import GameSingleArea from './GameSingleArea';
import '../../assets/css/bootstrap.min.css' ;
import '../../assets/css/default.css' ;
import '../../assets/css/fontawesome-all.min.css' ;
import '../../assets/css/responsive.css' ;
import '../../assets/css/style.css' ;
import '../../assets/css/animate.min.css' ;
import '../../assets/css/aos.css' ;
import '../../assets/css/magnific-popup.css' ;
import '../../assets/css/slick.css' ;
import '../../assets/css/odometer.css' ;
import '../../assets/css/meanmenu.css' ;
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ContactArea from "../../components/index/indexthree/ContactArea";

function Overview(props) {

	const STORAGE_KEY = "competition";
	let {competition} = props ;
	const [storedCompetition, setStoredCompetition] = useLocalStorage(STORAGE_KEY, {});


	// On first App component mount
	useEffect(() => {
		if (competition) {
			console.log("Com ok") ;
			setStoredCompetition(competition) ;
		} else {
			console.log("Non ok") ;
			competition = storedCompetition ;
		}
		console.log(competition) ;
	}, []);


  return (
	<>
		<HeaderTwo/>
		<main>
			<Breadcrumb competition={competition}/>
			<GameSingleArea competition={competition}/>
		</main>
		<Footer/>
	</>
  )
}

export default Overview
