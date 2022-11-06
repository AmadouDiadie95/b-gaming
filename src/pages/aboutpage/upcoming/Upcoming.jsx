import React from 'react'
import HeaderTwo from '../../../components/header/HeaderTwo';
import Footer from '../../../components/footer/Footer';
import Breadcrumb from './Breadcrumb';
import UpcomingGames from './UpcomingGames';
import LatestMatch from '../aboutuspage/LatestMatch';
import AboutInner from '../aboutuspage/AboutInner';
import GamesArea from "../../../components/index/indextwo/GamesArea";
import MatchArea from "../../../components/index/indexthree/MatchArea";

function Upcoming(props) {
	const { showCompetition } = props;
  return (
	<>
	<HeaderTwo/>
	<main>
	<Breadcrumb/>
	<GamesArea showCompetition={showCompetition}/>
	</main>
	<Footer/>
	</>
  )
}

export default Upcoming
