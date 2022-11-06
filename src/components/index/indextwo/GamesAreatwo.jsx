import React from 'react'
function GamesAreatwo() {

  
  return (
	 <section className="just-gamers-area just-gamers-bg pt-115 pb-120" id="community">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-10">
                  <div className="section-title title-style-three white-title mb-70">
                    <h2>JUST FOR <span>GAMERS</span></h2>
                    <p>Compétitez et Defiez plus de 400 membres au sein de notre Communauté à
                      travers tout Bamako.</p>
                  </div>
                  <div className="just-gamers-list">
                    <ul>
                      <li>
                        <div className="just-gamers-list-icon">
                          <img src="assets/img/icon/gamer_list_icon01.png" alt="" />
                        </div>
                        <div className="just-gamers-list-content fix">
                          <h5>Tournois Gaming</h5>
                          <p>Naruto Storm 4, FIFA 23, Tekken 7, Dbz Tenkaichi 3, Jump Force, etc...</p>
                        </div>
                      </li>
                      <li>
                        <div className="just-gamers-list-icon">
                          <img src="assets/img/icon/gamer_list_icon02.png" alt="" />
                        </div>
                        <div className="just-gamers-list-content fix">
                          <h5>Quiz Otaku</h5>
                          <p>Retrouvez nos Quiz que seul un pure Otaku peut gagner.</p>
                        </div>
                      </li>
                      <li>
                        <div className="just-gamers-list-icon">
                          <img src="assets/img/icon/gamer_list_icon03.png" alt="" />
                        </div>
                        <div className="just-gamers-list-content fix">
                          <h5>VR & Decouverte</h5>
                          <p>Retrouvez nos Stands de Réalité Virtuelle et bien d'autre encore...</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 d-none d-lg-block">
                  <div className="just-gamers-img">
                    <img src="assets/img/images/just_gamers_img.png" alt="" className="just-gamers-character" />
                    <div className="just-gamers-circle-shape">
                      <img src="assets/img/images/gamers_circle_line.png" alt="" />
                      <img src="assets/img/images/gamers_circle_shape.png" alt="" className="rotateme" />
                    </div>
                    <img src="assets/img/images/just_gamers_chart.png" alt="" className="gamers-chart-shape" />
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default GamesAreatwo
