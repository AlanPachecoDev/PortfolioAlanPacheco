import React, { useState } from "react";

import AboutMeCard from "./AboutMeCard";

import ImagesBackground from "./ImagesBackground.js";

import "../Styles/HomeStyle.css";


const FrontPage = () => {
    const [showAboutMe, setShowAboutMe] = useState(false);

    const handleAboutMe = () => {
        setShowAboutMe(!showAboutMe);
    }

    return(
        <div className="bodyContainer">
            <section className="homeContent">
                <h1 id="h1AlanPacheco">Alan Pacheco</h1>
                    
                <button id="aboutMeButton" onClick={handleAboutMe}>Acerca de mi</button>
                <ImagesBackground></ImagesBackground>
            </section>
            {showAboutMe? <AboutMeCard closeAboutMe={handleAboutMe}></AboutMeCard>  :  <></>}
            
            
        </div>
  );
}

export default FrontPage;