import styled from "styled-components";

export const GiantButton = styled.button`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 10px;

	position: absolute;
	width: 897px;
	height: 138px;
	left: 450px;
	top: 443px;

	/* Glass */

	background: linear-gradient(
		134.49deg,
		rgba(189, 189, 189, 0.9) -1.46%,
		rgba(189, 189, 189, 0.225) 100.75%
	);
	border-radius: 50px;
`;

GiantButton.text = styled.h1`
	position: static;
	width: 877px;
	height: 118px;
	left: 10px;
	top: 10px;

	font-family: "Montserrat", sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	line-height: 59px;
	text-align: center;

	color: #ffffff;

	text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0px 10px;
`;
