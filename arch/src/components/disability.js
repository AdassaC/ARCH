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
						{/* <p>
						https://poorvucenter.yale.edu/ImplicitBiasAwareness
						</p>
						<p>
						https://www.psychologytoday.com/us/blog/culturally-speaking/201711/are-racial-
						</p> */}
					</div>
					<div className="group">
						<p className="p">
							Individuals with disabilities encounter obstacles in all facets of
							life, encompassing tangible hindrances such as inaccessibility,
							societal disapproval, and bias. These difficulties are exacerbated
							by misconceptions about attitudes and low awareness. Limited
							inclusive practices, inaccessible technology, discrepancies in
							employment, and financial distress are among the problems.
							Policies may not be implemented properly, and legal protections
							may not be adequate. Inclusion, accessibility, and awareness
							raising are essential if we are to build a more just and
							accommodating society for people with disabilities.
						</p>
					</div>
					<img src={Placeholder} alt="placeholder" />
				</div>
				<div className="group-2" />
				<div className="text-wrapper-13">People With Disabilities</div>
				<div className="overlap-wrapper">
					<div className="overlap-2">
						<div className="challenges">CHALLENGES</div>
						<ul className="tasks-list">
							<li>
								Learn about different types of disabilities and their unique
								challenges.
							</li>
							<li>
								Offer assistance to classmates with disabilities when needed,
								respecting their preferences.
							</li>
							<li>
								Advocate for accessible campus facilities, including classrooms,
								libraries, and recreational areas.
							</li>
							<li>
								Participate in inclusive group activities and projects that
								accommodate all students.
							</li>
							<li>
								Be mindful of language use, avoiding derogatory terms related to
								disabilities.
							</li>
							<li>
								Support and include classmates with disabilities in social
								events and extracurricular activities.
							</li>
							<li>
								Raise awareness about accessibility issues on campus through
								student organizations or forums.
							</li>
							
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BIPOC;