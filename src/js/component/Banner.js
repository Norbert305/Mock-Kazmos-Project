import React from "react";
import { StyledBanner } from "./styledComponents/Banner.styled";
import { GiantButton } from "./styledComponents/GiantButton.styled";
import pink_planet_z from "../../img/pink_planet_z.png";
import pink_planet_x from "../../img/pink_planet_x.jpg";

export function Banner() {
	return (
		<StyledBanner image={pink_planet_z}>
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
