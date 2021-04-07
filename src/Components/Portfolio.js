import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Portfolio = ({ data }) => {
  const sliderInProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }

  


  return (
    <section id="portfolio">
      <h1>
        <span className="my-4">
          Quelques de nos projets :
      </span>
      </h1>
      <div className="h-100 slide-container h-max-c">

        <Slide easing="ease" {...sliderInProperties}>

          {data && data.projects.map(projects =>
 
              <div className="each-fade image-container bg-contain max-h-50v" style={{ 'backgroundImage': `url(../images/portfolio/${projects.image})` }}>
                <div className="trasparentOnHover">
                <span className="span-item-center text-center">
                  <h3>{projects.title} </h3>
                  <p>{projects.category} </p>
                </span>
                </div>
              </div>
              
          )


          }


        </Slide>
      </div>
    </section>
  );

}
export default Portfolio;