import React from "react";
import { NavBar } from "./styledComponents/Nav.styled";
import { SmallButton } from "./ReusableElements/SmallButton";

export function Nav() {
	return (
		<div>
			<NavBar>
				<ul>
					<li style={{ float: "left" }}>
						<a href="">
							{" "}
							<h2>Kazmos</h2>{" "}
						</a>
					</li>
					<li>
						<SmallButton>Join our Community</SmallButton>
					</li>
					<li>
						<a href="">About us</a>
					</li>
					<li>
						{" "}
						<a href="">Roadmap</a>
					</li>
					<li>
						{" "}
						<a href="">Business</a>
					</li>
					<li>
						{" "}
						<a href="">Talent</a>
					</li>
				</ul>
			</NavBar>
		</div>
	);
}
