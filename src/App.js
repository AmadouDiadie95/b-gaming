import { BrowserRouter as Router, Switch} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Shop from './pages/store/Shop';
import Contact from './pages/contact/Contact';
import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';
import HomeFour from './pages/homes/HomeFour';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Upcoming from "./pages/aboutpage/upcoming/Upcoming";
import Overview from "./pages/overview/Overview";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1BdR4PZ8r39qf0JlyC2_zxL2cbOEweUg",
    authDomain: "bgaming-da149.firebaseapp.com",
    projectId: "bgaming-da149",
    storageBucket: "bgaming-da149.appspot.com",
    messagingSenderId: "950611635312",
    appId: "1:950611635312:web:feef7ce706bc998995d8b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




function App() {
        // const [loading,setLoading] = useState(false);
        const [competitionChoiced,setCompetitionChoiced] = useState({});

        /*useEffect(()=>{
         setLoading(true)
         setTimeout(()=>{
           setLoading(false)
         },8000) ;
        },[]) ;*/

        useEffect(()=>{

        },[]) ;
        
        function showCompetition(competition) {
            console.log('Show competition on app => ') ;
            console.log(competition) ;
            setCompetitionChoiced(competition)
        }

  return (
    /*  loading ?(
              <MoonLoader color={color} loading={loading} css={override} size={150} />
          ) : (*/
    <div className="App">
      
     <Router>
       
        <Switch>
        <ScrollToTopRoute exact={true} path='/'>
         <HomeFour/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/tournois'>
         <Upcoming showCompetition={showCompetition}/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/competition'>
         <Overview competition={competitionChoiced}/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/shop'>
         <Shop/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/contact'>
        <Contact/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/home'>
        <HomeFour/>
        </ScrollToTopRoute>
        <ScrollToTopRoute>
            <HomeFour/>
        </ScrollToTopRoute>
     </Switch>
     </Router>
     
    </div>
     // )
  );
}

export default App;
