import React from 'react' ;
import { useForm, ValidationError } from '@formspree/react';

function ContactArea() {
  const [state, handleSubmit] = useForm("xqkjynwb");
  let cpt = 0 ;
  if (state.succeeded && cpt === 0) {
    alert("Merci de contactez B-Gaming Corp. Nous vous reçu votre méssage et " +
        "nous vous contacterons dès que possible !") ;
    cpt ++ ;
  }
  return (
	  <section className="contact-area third-contact-bg">
            <div className="container custom-container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="third-contact-wrap">
                    <div className="third-title-style">
                      <h2>contactez-<span>nous</span></h2>
                      <div className="inner">
                        <h2>Rencontrez B-Gaming</h2>
                        <h6 className="vertical-title">Bamako</h6>
                        <ul>
                          <li><span>Email :</span> amadou.diadie04@gmail.com</li>
                          <li><span>Phone :</span> + 223 92 93 17 49</li>
                        </ul>
                      </div>
                      {/*<a href="/#" className="btn rotated-btn">buy Now</a>*/}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form  className="third-contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <input name="fullName" type="text" placeholder="Nom Complet" />
                      </div>
                      <div className="col-sm-6">
                        <input name="phone" type="text" placeholder="Numéro de Télephone" />
                      </div>
                    </div>
                    <textarea name="message" id="message" placeholder="Votre Message" defaultValue={""} />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button className="btn rotated-btn" type="submit" disabled={state.submitting}>
                      envoyer</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
  )
}

export default ContactArea
