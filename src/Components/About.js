import React ,{useState} from 'react';
import Bounce from 'react-reveal/Bounce';


const About = ({ data }) => {
   const [seeObj, setSeeObj] = useState(false)


   //-- constant

   const name = data.name;
   const profilepic = "images/" + data.image;
   const bio = data.bio;
   const street = data.address.street;
   const city = data.address.city;
   const state = data.address.state;
   const zip = data.address.zip;
   const phone = data.phone;
   const email = data.email;
   const resumeDownload = data.resumedownload;
   const smile = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.836 6.896 11 7 11 6.5c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5c0 .501.164.396.415.235.165-.106.367-.235.585-.235.218 0 .42.13.585.235z" />
   </svg> 

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2>À Propos De Nous</h2>

               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Nos Coordonnées</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                           {city} {state}, {zip}
                        </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">

                     <div id="rootAnim">
                     <button onClick={e=>setSeeObj(!seeObj)}  className="button"><i>{smile}</i>Objectifs cachés</button>
 {seeObj &&
                           <Bounce top> 
                            <ul>
                              <li>Un jour être le meilleur codeur</li>
                              <li>se battre sans répit</li>
                              <li>faire tout pour être vainqueur</li>
                              <li>gagner les défis</li>
                              <li> parcourir la terre entière</li>
                              <li>Traquant avec espoir</li>
                              <li>les framework et leurs mystères</li>
                              <li>Le secret de leurs pouvoirs</li>


                            </ul>
</Bounce>
 }

                      
                      
                     </div>


                  </div>
               </div>
            </div>
         </div>

      </section>
   );
}


export default About;
