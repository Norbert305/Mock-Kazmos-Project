import React from "react";
import { Container } from "./styledComponents/Container.styled";
import { Nav } from "./Nav";
import { Banner } from "./Banner";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TopBackground } from "./styledComponents/BackgroundTop.styled";
import { DividerImage } from "./DividerImage";
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
				</Container>
			</div>
		</Router>
	);
};

export default Home;
