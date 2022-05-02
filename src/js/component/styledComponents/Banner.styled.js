import styled from "styled-components";

export const StyledBanner = styled.section`
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top center;
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: flex-end;
`;
StyledBanner.Container = styled.div``;

StyledBanner.Devider = styled.section`
	background-image: url(${(props) => props.separator});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top center;
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: flex-end;
`;
