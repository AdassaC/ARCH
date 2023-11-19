import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 
function Navbar() {
  return (
		<nav className="navbar">
			<ul className="nav-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/bipoc">BIPOC</Link>
				</li>
				<li>
					<Link to="/lgbtq">LGBTQ</Link>
				</li>
				<li>
					<Link to="/disability">People w/ Disabilties</Link>
				</li>
				<li>
					<Link to="/checkYourBias">Quizzes</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
