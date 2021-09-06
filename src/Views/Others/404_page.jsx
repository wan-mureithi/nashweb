import React from 'react';
import Menubar from '../../Components/LandingPages/Menubar';
import '../../Styles/onboarding.css';

const PageNotFound = () => {
    return (
        <div className="pageHeader">
        <Menubar  />
        <div style={{ width: "100%", paddingTop: "90px" }}>
          <p className="title">Page not found</p> 
          <div className="pageContent">
          <img src="/assets/img/not-found.svg" alt="notFound"/>
          </div>
        </div>
      </div>
    )
}

export default PageNotFound