import React from 'react'
import Breadcrumb from './Breadcrumb';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import Brand from '../../components/index/indexone/Brand'
import ContactArea from "../../components/index/indexthree/ContactArea";
import HeaderFour from "../../components/header/HeaderFour";


function Contact() {
  return (
	<>
	<HeaderFour/>
	<main>

	<Breadcrumb/>
	{/*<ContactArea/>*/}
		<ContactArea/>
	<Brand/>
	</main>
	<Footer/>
	</>
  )
}

export default Contact
