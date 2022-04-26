import React from "react";
import { StyledBanner } from "./styledComponents/Banner.styled";
import { GiantButton } from "./styledComponents/GiantButton.styled";

export function Banner() {
	return (
		<StyledBanner>
			<StyledBanner.Container>
				<GiantButton to="">
					<GiantButton.text>
						We’re on a mission to create the world’s best Web3
						talent ecosystem
					</GiantButton.text>
				</GiantButton>
			</StyledBanner.Container>
		</StyledBanner>
	);
}
