import React from "react";
import { Container } from "./styledComponents/Container.styled";
import { Nav } from "./Nav";
import { Banner } from "./Banner";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<Router>
			<div>
				<Container>
					<Nav />
					<div style={{ margin: "50px auto" }}>
						<Banner />
					</div>
				</Container>
			</div>
		</Router>
	);
};

export default Home;
