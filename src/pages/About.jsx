import React from 'react';
import './about.css';
import stellapic from '../images/stella.jpg';

function About() {
    return (
        <section id="about" className='about'>
          <div className="container-fluid">
              <div className="row">
                  <h4 className="section-title">About</h4>
              </div>
            
        <div className="col-sm-6 col-md-4">
            <div className="stella-item">
                 
               <img src= {stellapic}  className="stella-pic" alt="pic" />
                 <h3>Stella Belessi</h3>
                <div className= "stella-description">
                <div className= "stella-info">
                    <p> Film Director</p></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus,
                     a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. 
                    Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.</p> 
 
                   <ul className="stella-icon">
                    
                    <li><a href="https://www.facebook.com/stella.belessi" className="facebook">
                         <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                   
                   <li><a href="https://www.youtube.com/@stellabelessi" className="youtube">
                          <ion-icon name="logo-youtube"></ion-icon>
                        </a></li>
                 </ul>
                 </div> 
                
           </div>
        </div>   
        </div> 
    </section>
   );
}

export default About;
