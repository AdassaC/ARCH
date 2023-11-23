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
					<div className="resources_box">
						<div className="resources">RESOURCES</div>
						<div className="box_text">
							<h2>
								Practical Resources for Becoming an Ally
							</h2>
							<h3 className="resource_link">
								<a className="rlink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									Becoming More Aware of Implicit Bias
								</a>							
							</h3>
							<h3 className="resource_link">
								<a className="rlink" href="https://ctb.ku.edu/en/table-of-contents/culture/cultural-competence/be-an-ally/main">
									Learning to be an Ally for People from Diverse Groups and Backgrounds
								</a>							</h3>
							<h3 className="resource_link">
								<a className="rlink" href="https://www.greenpeace.org/usa/10-ways-to-be-ally-indigenous-peoples/">
									Honor With Action: 10 Ways to be an Ally to Indigenous Peoples 
								</a>
							</h3>
							<h3 className="resource_link">
								<a className="rlink" href="https://hbr.org/2023/06/a-guide-to-becoming-a-better-ally">
								A Guide to Becoming a Better Ally by Rakshitha Arni Ravishankar
								</a>
							</h3>

							<h2>
								Toolkits
							</h2>
							<h3 className="resource_link">
								<a className="rlink" href="https://www.nytimes.com/2019/05/29/books/review/antiracist-reading-list-ibram-x-kendi.html"> 
									Ibram X. Kendi’s Antiracist Reading List 
								</a>							
							</h3>
							<h3 className="resource_link">
								<a className="rlink" href="http://www.ywcahbg.org/sites/default/files/manager/10%20Things%20Allies%20Can%20Do.pdf">
									10 Things You Can Do to be an Ally
								</a>							
							</h3>
							<h3 className="resource_link">
								<a className="rlink" href="https://ctb.ku.edu/sites/default/files/site_files/toolkit_-_building_strength_for_the_long_haul_toward_liberation_-_digital.pdf">
									BUILDING STRENGTH FOR THE LONG HAUL TOWARD LIBERATION: A TOOLKIT 
								</a>
							</h3>

							<h2>
								TedTalks
							</h2>
							<h3 className="resource_link">
								<a className="rlink" href="https://www.ted.com/talks/melinda_briana_epler_3_ways_to_be_a_better_ally_in_the_workplace">
									3 ways to be a better ally in the workplace
								</a>
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
					<div className="challenges_box">
						<div className="challenges">CHALLENGES</div>
						<div className="box_text">
							<h2 className="cheader">
								Black
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									Oppression and Power
								</a>							
							</h3>
							<h3 className="resource_link">
								<a className="clink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									Racial Inequality in Schools
								</a>							
							</h3>

							<h2 className="cheader">
								Indigenous
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									The American Indian/Alaska Native Population in the U.S. and Their Unique Challenges
								</a>							
							</h3>
							<h3 className="resource_link">
								<a className="clink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									Challenges and Opportunities for Indigenous Peoples’ Sustainability
								</a>							
							</h3>
							
							<h2 className="cheader">
								Asian American and Pacific Islander
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									The Model Minority Myth
								</a>							
							</h3>

							<h2 className="cheader">
								LatinX
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									The Long History of Anti-Latino Discrimination in America 
								</a>							
							</h3>

							<h2 className="cheader">
								Middle East and North Africa, Arab
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									Guide to Understanding Israel-Palestine Conflict
								</a>							
							</h3>
							
						</div>
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default BIPOC;