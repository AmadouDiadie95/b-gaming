import React from 'react'
import {Link} from 'react-router-dom'
import competitions from '../../my-data' ;


function GamesArea(props) {

  const { showCompetition } = props;
  const listCompetitions = competitions ;

  return (
	 <section className="featured-game-area position-relative pt-115 pb-90">
            <div className="featured-game-bg" />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-70">
                    <h2>Rejoignez la <span>Competition</span></h2>
                    <p>Inscrivez-vous et Compititez avec une communauté de plus de 100 joueurs sur nos Tournois pour gagner
                    des prix, Serez-Vous à la Hauteur ?</p>
                  </div>
                </div>
              </div>
              <div className="row featured-active">
                {
                  listCompetitions.map( (competition) => (
                      <div key={competition.id} className="col-lg-4 col-sm-6 grid-item">
                        <div className="featured-game-item mb-30">
                          <div className="featured-game-thumb">
                            <img style={{height:competition.imageHeight,borderRadius:10}} src={competition.image} alt="" />
                          </div>
                          <div className="featured-game-content">
                            <h4><Link onClick={() => showCompetition(competition)} to={'/competition'}>{competition.name} <span>{competition.name2}</span></Link></h4>
                            <div className="featured-game-meta">
                              <i className="fas fa-bell" />
                              <span>{competition.console}</span>
                            </div>
                          </div>
                          <div className="featured-game-content featured-game-overlay-content">
                            <div className="featured-game-icon"><img src="assets/img/icon/featured_game_icon.png" alt="" /></div>
                            <h4><Link onClick={() => showCompetition(competition)} to={'/competition'}>{competition.name} <span>{competition.name2}</span></Link></h4>
                            <div className="featured-game-meta">
                              <i className="fas fa-bell" />
                              <span>{competition.console}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  ) )
                }

              </div>
            </div>
          </section>
  )
}

export default GamesArea
