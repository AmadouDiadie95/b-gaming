import React from 'react'
import {Link} from 'react-router-dom'


function CtaArea() {


  
  return (
	<section className="cta-area cta-bg">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-5 col-lg-6">
                  <div className="cta-img">
                    <img src="assets/img/images/cta_img.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="cta-content">
                    <div className="cta-icon mb-15">
                      <img src="assets/img/icon/cta_icon.png" alt="" />
                    </div>
                    <div className="section-title title-style-three white-title mb-50">
                      <h2>REJOINEZ LA <span>COMPETITION</span></h2>
                      <p>La 3eme Edition des Tournois B-Gaming Corp. se dérouleront en Décembre 2022,
                        Suivez-nous sur nos Reseaux.</p>
                    </div>
                    <div className="cta-btn">
                      <Link to="/tournois" className="btn btn-style-two">NOS TOURNOIS</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default CtaArea
