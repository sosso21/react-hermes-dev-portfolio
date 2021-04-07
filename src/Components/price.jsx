import React, { Component } from 'react';

const Price =({data})=>{
 

    return (
      <section id="testimonials">
     <article className=" h-max-c p-4 w-100" >
      <h1  className="m-auto text-center">NOS TARIFS: </h1>
        
        <p>Profitez d'un service de création et de maintenance avec un rapport qualités / prix irréprochable avec des détails de livraisons correcte.une mise en ligne et un hébergement <strong className="important">  GRATUIT</strong> tout en vous assurant de vous retrouver un première  page des moteurs de recherche .</p>
        <p>Tout cela à un Taux Journalier Moyen de <strong className="important"> {data.tjm + data.devise}</strong>  </p>
        

     </article>

 </section>
    );
  }


export default Price;
