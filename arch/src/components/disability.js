// Using the components in another file or component
import React from 'react';
import "../styles/bipoc.css"; 
import Navbar from "./navbar";
import Placeholder from "../resources/bipoc_hero.jpeg";


const Disability = () => {
return (
	<div>
		<Navbar />
		<div className="content-template">
			<div className="div">
				<div className="resources_box">
					<div className="resources">RESOURCES</div>
					<div className="box_text">
						<h2>Practical Resources for Becoming an Ally</h2>
						<h3 className="resource_link">
							<a
								className="rlink"
								href="https://ldaamerica.org/types-of-learning-disabilities/"
							>
								Different types of disabilities
							</a>
						</h3>

					

						<h2>Toolkits</h2>
						<h3 className="resource_link">
							<a
								className="rlink"
								href="https://www.fordfoundation.org/wp-content/uploads/2020/10/ford-disability-inclusion-toolkit-1.pdf"
							>
								Ways to practice disability inclusion
							</a>
						</h3>
						<h3 className="resource_link">
							<a
								className="rlink"
								href="https://disabilityin.org/resource/disability-etiquette/"
							>
								Disability Etiquette
							</a>
						</h3>
						<h3 className="resource_link">
							<a
								className="rlink"
								href="https://wid.org/how-to-be-a-good-ally-to-disabled-people/"
							>
								Being a good ally for people with disabilities
							</a>
						</h3>

						<h2>TedTalks</h2>
						<h3 className="resource_link">
							<a
								className="rlink"
								href="https://www.youtube.com/watch?v=4WIP1VgPnco"
							>
								Changing the way we talk about disability
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
				<div className="overview">
					{/* <p className="p">
							"👥 Be the Change:
							Use A.R.C.H. as your go-to resource guide during conflicts. Our goal is to provide a safe space for learning, ensuring individuals from marginalized communities feel seen and heard.
							Join us in creating a workplace where allyship isn't just a concept – it's a way of life. Together, let's build a bridge to change and harmony."
            			</p> */}
					<p className="p">
						One billion people, constituting 15% of the global population,
						experience disabilities, with higher prevalence in developing
						countries. Individuals with disabilities often face adverse
						socioeconomic outcomes, including limited education, poorer health,
						reduced employment opportunities, and higher poverty rates. Poverty
						and disability are interconnected, with factors such as
						malnutrition, inadequate access to education and healthcare, unsafe
						working conditions, and environmental challenges contributing to
						this relationship.
					</p>
					<p className="p">
						Barriers to the full inclusion of people with disabilities involve
						inaccessible environments, lack of assistive devices, non-adapted
						communication means, service delivery gaps, and societal prejudice.
						Global awareness of disability-inclusive development has grown,
						evidenced by the UN Convention on the Rights of Persons with
						Disabilities (CRPD) and the 2030 Agenda for Sustainable Development.
						The CRPD emphasizes international development's role in addressing
						disability rights, while the SDGs framework includes specific
						targets for persons with disabilities.
					</p>
					<p className="p">
						Although disability is often linked to health conditions (such as
						arthritis, mental or emotional conditions) or events (such as
						injuries), the well-being, independence, and societal engagement of
						individuals with disabilities can vary. Several factors influence
						their experiences: Severity of the Underlying Impairment: The degree
						of impairment significantly affects how individuals navigate their
						daily lives and participate in society. Social, Political, and
						Cultural Influences: Societal attitudes, political policies, and
						cultural expectations shape the opportunities and challenges faced
						by people with disabilities. Natural and Built Surroundings:
						Accessibility of physical environments, including public spaces and
						infrastructure, plays a crucial role in facilitating or hindering
						the participation of individuals with disabilities. Availability of
						Assistive Technology: Access to and use of assistive technology and
						devices can enhance functionality and support individuals in various
						aspects of life. Family and Community Support: Strong support from
						family and community networks contributes significantly to the
						well-being and inclusion of individuals with disabilities.
					</p>
				</div>
				{/* <img src={Placeholder} alt="placeholder"/> */}
			</div>
			<div className="group-2" />
			<div className="title">People Living w/ Disabilities</div>
			<div className="overlap-wrapper">
				<div className="challenges_box">
					<div className="challenges">CHALLENGES</div>
					<div className="box_text">
						<h2 className="cheader">Physical</h2>
						<h3 className="resource_link">
							<a
								className="clink"
								href="https://www.google.com/search?q=living+life+with+physical+disabiliti&sca_esv=30789f94c888ec01&ei=vc9eZbnLOrWGwbkP8fmVwAU&ved=0ahUKEwj5nZGrn9mCAxU1QzABHfF8BVgQ4dUDCBA&uact=5&oq=living+life+with+physical+disabiliti&gs_lp=Egxnd3Mtd2l6LXNlcnAiJGxpdmluZyBsaWZlIHdpdGggcGh5c2ljYWwgZGlzYWJpbGl0aTIIEAAYgAQYogQyCBAAGIAEGKIESMkpUIgSWOsncAN4AZABAZgB-QGgAdIRqgEGNC4xNC4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGA0YsQMYsQPCAgcQABiABBgNwgIIEAAYBRgeGA3CAggQABgIGB4YDcICCxAAGIAEGIoFGIYDwgIGEAAYBRgewgIGEAAYCBgewgIEECEYCuIDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp#ip=1"
							>
								Living with a Physical Disability
							</a>
						</h3>

						<h2 className="cheader">Cognitive</h2>
						<h3 className="resource_link">
							<a
								className="clink"
								href="https://www.cdc.gov/aging/pdf/cognitive_impairment/cogimp_poilicy_final.pdf"
							>
								Understanding Cognitive Disabilities
							</a>
						</h3>
						<h3 className="resource_link">
							<a
								className="clink"
								href="https://civil-protection-humanitarian-aid.ec.europa.eu/what/humanitarian-aid/disability-inclusion_en"
							>
								Importance of Disability Inclusion
							</a>
						</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
);
};

export default Disability;
