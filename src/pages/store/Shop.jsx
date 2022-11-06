import React from 'react'
import BreadCrumb from './BreadCrumb';
import HeaderTwo from '../../components/header/HeaderTwo';
import Footer from '../../components/footer/Footer';
import ShopArea from './ShopArea';
import HeaderFour from "../../components/header/HeaderFour";


function Shop() {
  return (
	<>
	 <HeaderFour/>
     <main>
	 	<BreadCrumb/>
		<ShopArea/>
	 </main>
	 <Footer/>
	</>
  )
}

export default Shop
