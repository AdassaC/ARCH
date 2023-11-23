/** @format */

import React from "react";
import "../styles/bipoc.css"; 
import Navbar from "./navbar";
import Placeholder from "../resources/bipoc_hero.jpeg";

const BIPOC = () => 
{
  return (
		<div>
			<Navbar />
			<div className="content-template">
				<div className="div">
					<div className="overlap3">
						<div className="resources">RESOURCES</div>
						<div className="resource_text">
							<h3 >
								Informative and Educational Resources
							</h3>
						</div>
						{/* <p>
						https://poorvucenter.yale.edu/ImplicitBiasAwareness
						</p>
						<p>
						https://www.psychologytoday.com/us/blog/culturally-speaking/201711/are-racial-
						</p> */}

					</div>
					<div className="group">
						<p className="p">
							"👥 Be the Change:
							Use A.R.C.H. as your go-to resource guide during conflicts. Our goal is to provide a safe space for learning, ensuring individuals from marginalized communities feel seen and heard.
							Join us in creating a workplace where allyship isn't just a concept – it's a way of life. Together, let's build a bridge to change and harmony."
            			</p>
            
          </div>
          <img src={Placeholder} alt="placeholder"/>
				</div>
				<div className="group-2" />
				<div className="text-wrapper-13">Black, Indigenous, and People of Color (BIPOC)</div>
				<div className="overlap-wrapper">
					<div className="overlap-2">
						<div className="challenges">CHALLENGES</div>
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default BIPOC;