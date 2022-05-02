import styled from "styled-components";
import { Link } from "react-router-dom";

export const SmallButton = styled(Link)`
	/* Join our Community button */

	/* Auto layout */

	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	padding: 10px 26px;
	text: align-center;
	text-decoration: none;
	text-align: center;
	background: rgba(39, 117, 211, 1);
	border-radius: 20px;

	/* Inside auto layout */

	flex: none;
	order: 1;
	flex-grow: 0;
	margin-left: 28px;
	color: white;
`;

SmallButton.text = styled.p`
	/* Join our Community Text*/

	position: static;
	width: 184px;
	height: 27px;
	left: 26px;
	top: 10px;

	font-family: "Poppins";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;
	/* identical to box height */

	display: flex;
	align-items: center;
	text-align: center;

	color: #ffffff;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;
	margin: 0px 7px;
`;
