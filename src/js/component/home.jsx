import React from "react";
import { Container } from "./styledComponents/Container.styled";
import { Nav } from "./Nav";
import { Banner } from "./Banner";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DividerImage } from "./DividerImage";
import pink_planet2 from "../../img/pink_planet2.png";
import { TopBackground } from "./styledComponents/BackgroundTop.styled";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<Router>
			<div>
				<Container>
					<TopBackground>
						<Nav />
						<div style={{ margin: "50px auto" }}>
							<Banner />
						</div>
					</TopBackground>
					<DividerImage />
				</Container>
			</div>
		</Router>
	);
};

export default Home;

<div
	style={{ backgroundImage: `url(${pink_planet2})` }}
	className="pinkPlanet"></div>;
