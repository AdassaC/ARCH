import React from "react";

import { Link } from 'react-router-dom';
import hero from '../resources/hero.png';
import '../styles/home.css'; // Import the CSS file

class Home extends React.Component{
    render() {
        return (
            <div className="homepage">
              <div className="overlap-wrapper">
                <div className="overlap">
                  <div className="overlap-group">
                    <a href="/home">
                        <div className="text-wrapper-7">
                            Home
                        </div>
                    </a>
                    <a href="/disability">
                        <div className="text-wrapper">
                            Disability
                        </div>
                    </a>
                    <a href="/bipoc">
                        <div className="text-wrapper-2">
                            BIPOC
                        </div>
                    </a>
                    <a href="/lgbtq">
                        <div className="div">
                            LGBTQ
                        </div>
                    </a>
                    <div className="quizzes-btn">
                      <div className="div-wrapper">
                        
                      
                        {/* <Link className="text-wrapper-3" to="/checkYourBias">Quizzes</Link>*/}
                        
                        <a href="/checkYourBias">
                            <div className="text-wrapper-3">Quizzes </div>
                        </a>
                      </div>
                    </div>
                    <div className="group" />
                    <div className="text-wrapper-4">A.R.C.H.</div>
                    <div className="overlap-group-wrapper">
                      <div className="overlap-2">
                        <h4>
                        🌟Welcome to A.R.C.H.Allyship Resources for Change and Harmony!🌟
                        </h4>
                        <p className="p">
                        At A.R.C.H., we believe in the power of allyship to create positive change in the workplace. 
                        Our mission is to empower you with the knowledge and resources needed to champion diversity, inclusion, and authentic expression.
                        </p>
                        {/* <h4>
                        🌈 Why A.R.C.H.?
                        </h4> */}
                        <p className="text-wrapper-5">
                        Embark on a journey of understanding and allyship with us. Our platform is designed to be a beacon of change, fostering an inclusive environment where everyone's voice matters. 
                        We're not just a resource hub; we're a community committed to making a real impact.
                        </p>
                        {/* <p className="text-wrapper-6">
                          Vestibulum et luctus orci. Sed eu purus pellentesque, consequat orci in, imperdiet ipsum. Etiam
                          faucibus sollicitudin sem, vel vestibulum justo tincidunt sed.
                        </p> */}
                      </div>
                    </div>
                    
                    <button className="contact-us-btn">
                      <div className="overlap-3">
                        <a href="mailto:archteamproject@gmail.com">
                            <div className="text-wrapper-8">Contact us</div>
                        </a>
                      </div>
                    </button>
                    <p className="text-wrapper-9">© 2023 ARCH. All rights reserved.</p>
                  </div>
                  <div className="diversity-wrapper">
                    <img
                      className="diversity"
                      alt="Diversity"
                      src={hero}
                    />
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Home;