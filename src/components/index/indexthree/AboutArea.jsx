import React from 'react'

function AboutArea() {
  return (
	<section className="third-about-area third-about-bg pt-120 pb-90" id="about-us">
            <div className="container custom-container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
                  <div className="third-about-img text-right position-relative">
                    <img src="assets/bg-img/anime1.jpg" className="main-img" alt="" />
                    <img src="assets/img/images/third_about_img_shadow.png" className="shadow" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="third-about-content">
                    <div className="third-title-style">
                      <h2>B-GAMING <span>CORP.</span></h2>
                      <div className="inner">
                        <h2>QUI SOMMES-NOUS ?</h2>
                        <h6 className="vertical-title">THE GAME</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                      <a href="/#overview" className="btn rotated-btn">NOS TOURNOIS</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-my-info-wrap pt-110">
                <div className="row">
                  <div className="col-12">
                    <div className="third-section-title text-center mb-75">
                      <h2>REJOIGNEZ-<span>NOUS</span> AUJOURD'HUI</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-6 col-sm-8">
                    <div className="my-info-box mb-30">
                      <div className="my-info-box-top">
                        <h6>nos médailles</h6>
                        <img src="assets/img/bg/my_info_box_hover.png" alt="" className="info-box-top-hover" />
                      </div>
                      <div className="my-info-box-content">
                        <div className="mt-award">
                          <img src="assets/img/images/about_award.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-8">
                    <div className="my-info-box mb-30">
                      <div className="my-info-box-top">
                        <h6>nos reseaux</h6>
                        <img src="assets/img/bg/my_info_box_hover.png" alt="" className="info-box-top-hover" />
                      </div>
                      <div className="my-info-box-content">
                        <div className="my-info-social">
                          <ul>
                            <li><a target="_blank" href="/#"><i className="fab fa-whatsapp" /> Whatsapp</a></li>
                            <li><a target="_blank" href="https://m.youtube.com/channel/UCHC6f1yUcu_9Wzjq5rbs4hQ/videos"><i className="fab fa-youtube" /> Ytube</a></li>
                            <li><a target="_blank" href="https://instagram.com/b_gaming_corp?utm_medium=copy_link"><i className="fab fa-instagram" /> Insta</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-8">
                    <div className="my-info-box mb-30">
                      <div className="my-info-box-top">
                        <h6>notre communauté</h6>
                        <img src="assets/img/bg/my_info_box_hover.png" alt="" className="info-box-top-hover" />
                      </div>
                      <div className="my-info-box-content">
                        <div className="my-clan-wrap">
                          <div className="clan-logo">
                            <img src="assets/img/images/clan_logo.png" alt="" />
                          </div>
                          <div className="my-clan-info">
                            <h4><span>400+</span> membres</h4>
                            <span>dans tout Bamako</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default AboutArea
