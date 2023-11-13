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
                    <a href="">
                        <div className="text-wrapper">
                            Disability
                        </div>
                    </a>
                    <a href="">
                        <div className="div">
                            LGBTQ
                        </div>
                    </a>
                    <a href="">
                        <div className="text-wrapper-2">
                            BIPOC
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
                        <p className="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel augue eu sem pharetra ultrices. In
                          vel ipsum at mauris tincidunt feugiat. Duis sit amet est id massa pellentesque consequat.
                        </p>
                        <p className="text-wrapper-5">
                          Nullam non erat consequat, cursus turpis sed, aliquam metus. Nulla eleifend risus vitae eros gravida,
                          non feugiat lacus efficitur. Fusce tincidunt malesuada nulla id mollis. Etiam elementum viverra
                          ultricies. Fusce eleifend interdum turpis.
                        </p>
                        <p className="text-wrapper-6">
                          Vestibulum et luctus orci. Sed eu purus pellentesque, consequat orci in, imperdiet ipsum. Etiam
                          faucibus sollicitudin sem, vel vestibulum justo tincidunt sed.
                        </p>
                      </div>
                    </div>
                    
                    <button className="contact-us-btn">
                      <div className="overlap-3">
                        <a href="">
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