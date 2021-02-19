import React, { useState, useContext, useReducer } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//hash router should be changed after merged applications ^^

import 'react-dates/lib/css/_datepicker.css'

import 'react-dates/initialize'
// import 'bootstrap/dist/css/bootstrap.min.css'

//pages and header
import {LandingPage} from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import WhyWorkWithUs from "./pages/WhyWorkWithUs"
import CurrentJobOpenings from "./pages/CurrentJobOpenings"
import VisionAndMission from "./pages/VisionAndMission"
import CoreValues from "./pages/CoreValues"
import WhatWeDo from "./pages/WhatWeDo"
import CEOMessage from "./pages/CEOMessage"
import OurConsultants from "./pages/OurConsultants"
import Help from "./pages/Help";
import Feedback from "./pages/Feedback"
import FAQ from "./pages/FAQ"
import ContactUs from "./pages/ContactUs"
import MakePayment from "./pages/MakePayment"
import formDetails from "./pages/formDetails"
import PersonalInfo from './pages/personalInfo'

import NotFoundPage from "./pages/NotFound";
import LogAComplaint from "./pages/LogAComplaint";
import AllCategories from "./pages/AllCategories";
import TodaysDeals from "./pages/TodaysDeals";
import TVAdvertising from "./pages/TVAdvertising"
import RadioAds from "./pages/RadioAd";
import Cinema from "./pages/Cinema";
import OutOfHome from "./pages/OutOfHome";
import Prints from "./pages/Print";
import { Cart } from "./pages/Cart";
import {CartProvider, OpenProvider, PicProvider, ProductProvider, SubCatProvider, UserProvider} from './components/CartContext';
import {Confirmation} from './pages/Confirmation';
import ScrollToTop from './components/ScrollToTop';
import {Product} from './pages/Product';
import Production from "./pages/Production";
import Digital from "./pages/Digital";

import Hardware from "./pages/Hardware";
import { FormProvider, PragProvider } from "./components/FormContext";
import Timer from "./pages/Countdown";
import { VoiceOvers } from "./pages/VoiceOvers";
import PromotionalItems from "./pages/PromotionalItems";
import {VideoAnimation} from "./pages/VideoAnimation";
import {AddesignArtwork} from "./pages/AddesignArtwork";
import {LogoDesignCol} from "./pages/LogoDesignCollateral";
import {AppWebDes} from "./pages/AppWebsiteDesign";
import {ContentScript} from "./pages/ContentScriptWriting";
import { CamLens } from "./pages/CamLens";
import { AcoFoam } from "./pages/AcoFoam";
import { MusicE } from "./pages/MusicE";
import { BackgroundS } from "./pages/BackgroundS";
import { Cables } from "./pages/Cables";
import { CompLap } from "./pages/CompLap";
import { HeadPhones } from "./pages/HeadPhones";
import { Lighting } from "./pages/Lighting";
import { MSF } from "./pages/MSF";
import { Software } from "./pages/Software";
import {Speakers} from "./pages/Speakers"
import { Workstation } from "./pages/WorkStation";
import {SocialMediaM} from "./pages/SocialMediaM";
import { PromotionalItemsRes } from "./pages/PromotionalItems-Results";
import Account from "./pages/CreateAccount";





function App() {
  
  return (
    <PicProvider>
    <UserProvider>
     <CartProvider>
       <ProductProvider>
         <OpenProvider>
         <FormProvider>
         <PragProvider>
          <SubCatProvider>
    <Router>
     <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Timer} />
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/createaccount" component={Account}/>
        <Route exact path="/LandingPage" component={LandingPage} />
        <Route  path="/AboutUs" component={AboutUs}/>
        <Route exact path="/AboutUs/VisionAndMission" component={VisionAndMission}/>
        <Route exact path="/AboutUs/CoreValues" component={CoreValues} />
        <Route exact path="/AboutUs/WhatWeDo" component={WhatWeDo} />
        <Route exact path="/AboutUs/CEOMessage" component={CEOMessage} />
        <Route exact path="/AboutUs/OurConsultants" component={OurConsultants} />
        <Route exact path="/Career" component={Career}/>
        <Route exact path="/Career/WhyWorkWithUs" component={WhyWorkWithUs}/>
        <Route exact path="/Career/CurrentJobOpenings" component={CurrentJobOpenings} />
      
        <Route exact path="/Help" component={Help}/>
        <Route exact path="/Help/Feedback" component={Feedback}/>
        <Route exact path="/Help/FAQ" component={FAQ}/>
        <Route exact path="/Help/LogAComplaint" component={LogAComplaint}/>

        <Route exact path="/ContactUs" component={ContactUs}/>

        <Route exact path="/AllCategories" component={AllCategories}/>
        <Route exact path= "/AllCategories/TVAdvertising" component={TVAdvertising}/>
        <Route exact path= "/AllCategories/Radio" component={RadioAds}/>
        <Route exact path="/AllCategories/Cinema" component={Cinema}/>
        <Route exact path="/AllCategories/OutOfHome" component={OutOfHome}/>
        <Route exact path="/AllCategories/Print" component={Prints}/>
        <Route exact path="/AllCategories/Digital" component={Digital}/>
        <Route exact path="/AllCategories/Production" component={Production}/>
        <Route exact path="/AllCategories/Hardware" component={Hardware}/>

        <Route exact path='/AllCategories/Production/VoiceOvers' component={VoiceOvers}/>
      <Route exact path='/Allcategories/Production/PromotionalItems' component={PromotionalItems}/>
      <Route exact path='/Allcategories/Production/PromotionalItems-Results' component={PromotionalItemsRes}/>
        <Route exact path='/AllCategories/Production/VideoAnimation' component={VideoAnimation}/>
        <Route exact path='/AllCategories/Production/AdDesignArtwork' component={AddesignArtwork}/>
        <Route exact path='/AllCategories/Production/LogoDesignCollateral' component={LogoDesignCol}/>
        <Route exact path='/AllCategories/Production/AppWebsiteDesign' component={AppWebDes}/>
        <Route exact path='/AllCategories/Production/ContentScriptWriting' component={ContentScript}/>


        <Route exact path='/AllCategories/Hardware/CameraAndLenses' component={CamLens}/>
        <Route exact path='/AllCategories/Hardware/AcousticFoam' component={AcoFoam}/>
        <Route exact path='/AllCategories/Hardware/MusicAndEquipment' component={MusicE}/>
        <Route exact path='/AllCategories/Hardware/BackgroundScreen' component={BackgroundS}/>
        <Route exact path='/AllCategories/Hardware/Cables' component={Cables}/>
        <Route exact path='/AllCategories/Hardware/ComputersAndLaptops' component={CompLap}/>
        <Route exact path='/AllCategories/Hardware/HeadPhones' component={HeadPhones}/>
        <Route exact path='/AllCategories/Hardware/Lighting' component={Lighting}/>
        <Route exact path='/AllCategories/Hardware/MicrophoneStandsAndFilters' component={MSF}/>
        <Route exact path='/AllCategories/Hardware/Software' component={Software}/>
        <Route exact path='/AllCategories/Hardware/Speakers' component={Speakers}/>
        <Route exact path='/AllCategories/Hardware/Workstation' component={Workstation}/>

        <Route exact path="/AllCategories/Digital/SocialMediaManagement" component={SocialMediaM}/>


        <Route exact path="/Cart" component={Cart}/>
        <Route exact path="/Product" component ={Product}/>
        <Route exact path= "/NotFound" component={NotFoundPage} />
        <Route exact path= "/TodaysDeals" component={TodaysDeals}/>
        <Route exact path= "/Payment" component={MakePayment}/>
        <Route exact path= "/Payment/Confirmation" component={Confirmation}/>
        <Route exact path= "/formDetails" component={formDetails}/>
        <Route exact path= "/personalInfo" component={PersonalInfo}/>
       
        <Redirect to="/NotFound"/>
      </Switch>
      </ScrollToTop>
    </Router>
    </SubCatProvider>
    </PragProvider>
    </FormProvider>
    </OpenProvider>
    </ProductProvider>
    </CartProvider>
    </UserProvider>
    </PicProvider>
  );
}


export default App;
