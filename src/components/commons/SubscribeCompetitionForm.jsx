import React, { useEffect, useState } from 'react';

function SubscribeCompetitionForm(props) {
  const {competition, showClicked} = props ;

  const [gamer, setGamer] = useState({
    fullName: "",
    pseudo: "",
    phone: "",
    email: "",
    competition : competition
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setGamer({ ...gamer, [name]: value });
  }


  let cpt = 0 ;
  /*if (cpt === 0) {
    alert("Merci de contactez B-Gaming Corp. Nous vous reçu votre méssage et " +
        "nous vous contacterons dès que possible !") ;
    cpt ++ ;
  } ;*/

  function submitForm(event) {
    event.preventDefault() ;
    showClicked('') ;
    // alert(gamer.competition.name) ;
    /*alert(gamer.pseudo) ;
    alert(gamer.phone) ;
    alert(gamer.email) ;*/
    /*setGamer( {
      fullName: "",
      pseudo: "",
      phone: "",
      email: ""
    } ) ;*/
    alert("Inscription Effectuée avec Succèss, Merci de votre Confiance !") ;
  }

  return (
	  <section className="contact-area third-contact-bg" id="actionForm">
            <div className="container custom-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="third-contact-wrap">
                    <div className="third-title-style">
                      <h2>Inscrivez-<span>vous</span></h2>
                      <div className="inner">
                        <h2>{competition.name} {competition.name2}</h2>
                        <h6 className="vertical-title">B-Gaming</h6>
                        <ul>
                          <li><span>Frais d'Inscription :</span> {competition.price} </li>
                          <li><span>Date Limite :</span> {competition.closedDate} </li>
                          <li><span>NB :</span> Le Paiement des frais d'Inscriptions aura Lieu le jour de l'Evénement !</li>
                        </ul>
                      </div>
                      {/*<a href="/#" className="btn rotated-btn">buy Now</a>*/}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form  className="third-contact-form" onSubmit={(evt) => submitForm(evt)}>
                    <div className="row">
                      <div className="col-sm-6">
                        <input name="fullName" type="text" placeholder="Nom Complet"
                               value={gamer.fullName} onChange={(evt) => handleChange(evt)} />
                      </div>
                      <div className="col-sm-6">
                        <input name="pseudo" type="text" placeholder="Pseudo"
                               value={gamer.pseudo} onChange={(evt) => handleChange(evt)} />
                      </div>
                      <div className="col-sm-6">
                        <input name="phone" type="text" placeholder="Numéro de Télephone"
                               value={gamer.phone} onChange={(evt) => handleChange(evt)} />
                      </div>
                      <div className="col-sm-6">
                        <input name="email" type="email" placeholder="Email"
                               value={gamer.email} onChange={(evt) => handleChange(evt)} />
                      </div>
                    </div>
                    <button className="btn rotated-btn" type="submit">
                      Confirmer</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
  )
}

export default SubscribeCompetitionForm
