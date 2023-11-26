import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 
//import "../styles/home.css";
function Navbar() {
  return (
		<nav className="navbar">
			<ul className="nav-list">
				<li className="home">
					<Link to="/">Home</Link>
				</li>
				<li className="disability">
					<Link to="/disability">Disability</Link>
				</li>
				<li className="bipoc">
					<Link to="/bipoc">BIPOC</Link>
				</li>
				<li className="lgbtq">
					<Link to="/lgbtq">LGBTQ</Link>
				</li>
				<li className="bias">
					<div className="button">
						<Link to="/checkYourBias" style={{ color: "#ffffff" }}>
							Quizzes
						</Link>
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
