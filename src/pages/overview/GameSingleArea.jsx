import React, { useEffect, useState } from 'react';
import SubscribeCompetitionForm from "../../components/commons/SubscribeCompetitionForm";
import ListGamer from "../../components/commons/ListGamer";

function GameSingleArea(props) {
  const [showFormOrList, setShowFormOrList] = useState('');
  const {competition} = props ;

  const showClicked = (actionToShow) => {
    setShowFormOrList(actionToShow) ;
  } ;

  return (
      <div>
	      <section className="game-single-area pt-40 pb-50" id="inscription">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="game-single-content game-overview-content">
                <div className="upcoming-game-head">
                  <div className="uc-game-head-title">
                    <span>DATE DE CLOTURE : {competition.closedDate}</span>
                  </div>
                </div>
                <div className="row mt-55 mb-55">
                  <div className="col-lg-6 order-0 order-lg-2">
                    <div className="overview-history-img">
                      <img style={{borderRadius:10, height:300}} src={competition.image2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="game-single-title mb-15">
                      <h4>Prix {competition.name} <span>{competition.name2}</span></h4>
                    </div>
                    <div className="overview-history-content">
                      <div className="overview-history-list">
                        <ul>
                          <li>
                            <div className="overview-list-thumb">
                              <img style={{width:60}} src="assets/bg-img/1er.jpg" alt="" />
                            </div>
                            <div className="overview-list-content">
                              <h4>1ER PRIX DU TOURNOIS</h4>
                              <span>{competition.name} {competition.name2}</span>
                            </div>
                            <div className="overview-list-price">
                              <h4>{competition.firstPrice}</h4>
                            </div>
                          </li>
                          <li>
                            <div className="overview-list-thumb">
                              <img style={{width:60}} src="assets/bg-img/2e.jpg" alt="" />
                            </div>
                            <div className="overview-list-content">
                              <h4>2E PRIX DU TOURNOIS</h4>
                              <span>{competition.name} {competition.name2}</span>
                            </div>
                            <div className="overview-list-price">
                              <h4>{competition.secondPrice}</h4>
                            </div>
                          </li>
                          <li>
                            <div className="overview-list-thumb">
                              <img style={{width:60}} src="assets/bg-img/3e.jpg" alt="" />
                            </div>
                            <div className="overview-list-content">
                              <h4>3E PRIX DU TOURNOIS</h4>
                              <span>{competition.name} {competition.name2}</span>
                            </div>
                            <div className="overview-list-price">
                              <h4>{competition.thirdPrice}</h4>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-40">
                      {/*<a href="#actionList" onClick={ ()=>{showClicked('list')} } className="btn btn-style-two col text-light">Liste des Participants</a>*/}
                      <a onClick={ ()=>{showClicked('')} } className="btn btn-style-two col text-light">Liste des Participants</a>
                      <a href="#actionForm" onClick={ ()=>{showClicked('form')} } className="btn btn-style-two col text-light">S'Inscrire</a>
                    </div>
                  </div>
                </div>
                {/*<div className="game-single-title mt-50 mb-30">
                  <h4>Good to Know</h4>
                </div>
                <div className="game-single-info mb-45">
                  <ul>
                    <li><span>Category :</span> Vertical Shooter</li>
                    <li><span>Requirements :</span> PS4 , XBOX ONE , Steam</li>
                    <li><span>Multi player :</span> Games Controller System</li>
                    <li><span>Visual Effect :</span> Operating vero excepturi magnam System</li>
                  </ul>
                </div>
                <p>Consectetur adipiscing elit. Suspendisse a mauris vitae lacus commodo iaculis eget vitae magna. Nam leohe a volutpat
                  quis iaculis at, viverra id quam. Morbi pharetra, libero ut tempor finibus, metus massa pharetra dui, ornare pharetra
                  felis risus eu quam.</p>
                <p className="mb-0">Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien
                  nibh auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum.
                  Curabitr ut lacus vitae tellus lacinia pretium. Proin vestibulum sollcitudin tortor, quis auctor mi rutrum non. Donec
                  non eros eget purus lobortis imperdiet ac vitae est. Interdum et masuda fames ac ante ipsum primis in faucibus. Duis
                  ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit</p>
                <div className="game-single-shape"><img src="assets/img/images/game_section_shape.png" alt="" /></div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
        { showFormOrList == 'form' && (<SubscribeCompetitionForm competition={competition} showClicked={showClicked} />) }
        { showFormOrList == 'list' && (<ListGamer/>) }
      </div>
  )
}

export default GameSingleArea
