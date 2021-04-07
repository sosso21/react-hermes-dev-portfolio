import React from 'react';
import Bounce from 'react-reveal/Roll';

const Header = ({ data }) => {
   
   
   
   


   const name = data.name;
   const occupation = data.occupation;
   const description = data.description;
   const city = data.address.city;
   const networks = data.social.map(function (network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   })


   return (
      <header id="home">

         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Voir la navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Cacher navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">À Propos</a></li>
               <li><a className="smoothscroll" href="#resume">Résumé</a></li>
               <li><a className="smoothscroll" href="#portfolio">Expérience</a></li>
               <li><a className="smoothscroll" href="#testimonials">Tarifs</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">

              <Bounce left> <h1>{name}.</h1></Bounce>
              <h3>{description}</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
   );

}

export default Header;
