import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "./Container.styled";
// import { Link } from "react-scroll";

export const Header = styled.header`
	position: absolute;
	width: 100%;
`;

Header.Container = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

Header.NavBar = styled.nav``;

Header.NavBar.List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

Header.NavBar.ListItem = styled.li`
	margin-left: 30px;
	list-style-type: none;
`;

Header.NavBar.Link = styled.a`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	color: white;
	text-decoration: none;
`;

Header.Logo = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
`;

Header.Logo.Image = styled.img`
	width: 86px;
	height: 56px;
	margin-right: 20px;
`;

Header.Logo.Text = styled.span`
	color: white;
	font-weight: 700;
	font-size: 48px;
	font-family: "Montserrat";
`;
