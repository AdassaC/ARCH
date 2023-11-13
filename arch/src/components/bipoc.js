/** @format */

import React from "react";
import "../styles/bipoc.css"; 
import Navbar from "./navbar";
import Placeholder from "../resources/placeholder.png";

const BIPOC = () => 
{
  return (
		<div>
			<Navbar />
			<div className="content-template">
				<div className="div">
					<div className="overlap3">
						<div className="resources">RESOURCES</div>
					</div>
					<div className="group">
						<p className="p">
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            
          </div>
          <img src={Placeholder} alt="placeholder"/>
				</div>
				<div className="group-2" />
				<div className="text-wrapper-13">TITLE</div>
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