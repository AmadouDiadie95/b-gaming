import React from 'react'
import { Link } from 'react-router-dom';


function Breadcrumb(props) {

  const {competition} = props ;

  return (
	
      <div className="breadcrumb-area breadcrumb-bg game-overview-breadcrumb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-1 col-lg-2"> </div>
            <div className="col-xl-3 col-lg-4">
              <div className="game-overview-img">
                <img src={competition.image} style={{height:500, width:400, borderRadius:10}} alt="" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="breadcrumb-content text-center text-lg-left pl-80">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><a href="/tournois">Tournois</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{competition.name} {competition.name2}</li>
                  </ol>
                </nav>
                <h2>{competition.name} <span>{competition.name2}</span></h2>
                <div className="game-overview-status">
                  <ul>
                    <li><span>1er Prix : </span>{competition.firstPrice}</li>
                    <li><span>Clôture : </span>{competition.closedDate}</li>
                    <li><span>Console : </span>{competition.console}</li>
                  </ul>
                </div>
                <a href="#inscription" className="btn btn-style-two">S'Inscrire au Tournois</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Breadcrumb
