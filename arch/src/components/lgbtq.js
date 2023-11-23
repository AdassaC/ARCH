// Using the components in another file or component
import React from "react";
import "../styles/lgbtq.css"; 
import Navbar from "./navbar";
import Placeholder from "../resources/bipoc_hero.jpeg";

const LGBTQ = () => {
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
								<a className="rlink" href="https://hbr.org/2023/04/research-how-to-be-a-better-ally-to-the-lgbtq-community">
                                    How to Be a Better Ally to the LGBTQ+ Community 
								</a>
							</h3>
                            <h3 className="resource_link">
								<a className="rlink" href="https://www.hrc.org/resources/being-an-lgbtq-ally">
                                    Being an LGBTQ Ally
								</a>
							</h3>
                            <h3 className="resource_link">
								<a className="rlink" href="https://www.thetrevorproject.org/resources/guide/a-guide-to-being-an-ally-to-transgender-and-nonbinary-youth/">
                                    Guide to Being an Ally to Transgender and Nonbinary Young People 
								</a>
							</h3>
							<h3 className="resource_link">
								<a className="rlink" href="https://www.forbes.com/sites/forbescoachescouncil/2022/06/15/how-to-be-an-lgbtq-ally-at-work/?sh=4d0b9d4d1c44">
								    How To Be An LGBTQ+ Ally At Work
								</a>
							</h3>
                            <h3 className="resource_link">
								<a className="rlink" href="https://www.stonewall.org.uk/about-us/news/10-ways-you-can-step-ally-bi-people">
                                    10 Ways to Become a better Ally Bi People
								</a>
							</h3>
                            <h3 className="resource_link">
								<a className="rlink" href="https://poorvucenter.yale.edu/ImplicitBiasAwareness"> 
									Becoming More Aware of Implicit Bias
								</a>							
							</h3>
                            <h3 className="resource_link">
								<a className="rlink" href="https://ctb.ku.edu/en/table-of-contents/culture/cultural-competence/be-an-ally/main">
									Learning to be an Ally for People from Diverse Groups and Backgrounds
								</a>
                            </h3>

							{/*<h2>
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
                            </h3>*/}
						</div>
						{/* <p>
						https://poorvucenter.yale.edu/ImplicitBiasAwareness
						</p>
						<p>
						https://www.psychologytoday.com/us/blog/culturally-speaking/201711/are-racial-
						</p> */}

					</div>
					<div className="overview">
						{/* <p className="p">
							"👥 Be the Change:
							Use A.R.C.H. as your go-to resource guide during conflicts. Our goal is to provide a safe space for learning, ensuring individuals from marginalized communities feel seen and heard.
							Join us in creating a workplace where allyship isn't just a concept – it's a way of life. Together, let's build a bridge to change and harmony."
            			</p> */}
						<p className="p">
                            The LGBTQIA+ acronym encompasses a diverse range of sexual orientations and gender identities, acknowledging individuals who are transgender and/or attracted to the same or similar genders. It stands for lesbian, gay, bisexual, transgender, queer (or questioning), intersex, asexual, and others, with the "plus" signifying additional sexual identities like pansexual and Two-Spirit. 
						</p>
						<p className="p">
							The acronym has evolved to be more inclusive, aiming to represent various identities and orientations within the community. Each letter in the acronym represents specific identities, such as lesbian for same/similar gender attracted women, gay for similar gender attracted individuals (often men), bisexual for attraction to all genders, transgender for those whose gender differs from their assigned sex at birth, and more. 
						</p>
                        <p className="p">
                            The "plus" symbolizes identities not explicitly covered by the initial letters. Variations of the acronym have emerged to better represent the diversity within the community. The continuous evolution of the acronym reflects the evolving understanding and recognition of different sexual orientations and gender identities, striving for inclusivity and representation.
                        </p>
            
          </div>
          {/* <img src={Placeholder} alt="placeholder"/> */}
				</div>
				<div className="group-2" />
				<div className="title"> Lesbian, Gay, Bisexual,Transgender, Queer (LGBTQ+)</div>
				<div className="overlap-wrapper">
					<div className="challenges_box">
						<div className="challenges">CHALLENGES</div>
						<div className="box_text">
							<h2 className="cheader">
                                Lesbian & Gay Communities
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/lgbtq-plus-voices-learning-from-lived-experiences"> 
                                    Learning from lived experiences
								</a>							
							</h3>
							<h3 className="resource_link">
								<a className="clink" href="https://www.gallup.com/workplace/393983/lgbt-employee-experiences-know.aspx"> 
                                    Experiences of LGBT Employees in the Workplace
								</a>							
							</h3>

							<h2 className="cheader">
                                Bisexual Communities
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://www.brown.edu/campus-life/health/services/promotion/content/what-biphobia-what-bi-invisibility"> 
                                    Biphobia
								</a>							
							</h3>
							<h3 className="resource_link">
								<a className="clink" href="https://www.nytimes.com/2021/06/30/well/bisexual-mental-health-lgbt.html"> 
                                    The ‘Double Closet’
                                </a>							
							</h3>
							
							<h2 className="cheader">
                                Transgender Communities
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://www.historians.org/research-and-publications/perspectives-on-history/may-2018/what-is-trans-history-from-activist-and-academic-roots-a-field-takes-shape"> 
                                    What is Trans History?
								</a>							
							</h3>
                            <h3 className="resource_link">
								<a className="clink" href="https://www.nasdaq.com/articles/transgender-people-experience-unique-challenges-at-work"> 
                                    Unique Challenges Faced by Transgender People at Work
								</a>							
							</h3>

							<h2 className="cheader">
								Queer
							</h2>
							<h3 className="resource_link">
								<a className="clink" href="https://www.lgbtqandall.com/what-does-it-to-be-queer/">
                                    What Does It Mean To Be Queer? 
								</a>							
							</h3>						
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default LGBTQ;
