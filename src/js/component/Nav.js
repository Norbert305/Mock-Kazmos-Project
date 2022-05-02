import React from "react";
import { Header } from "./styledComponents/Nav.styled";
import { SmallButton } from "./ReusableElements/SmallButton";

export function Nav() {
	return (
		<div>
			<Header>
				<Header.Container>
					<Header.Logo to="/">
						<Header.Logo.Image
							src="https://s3-alpha-sig.figma.com/img/1e5c/5cc8/d76719f808938a8e31c3808d5b018422?Expires=1652054400&Signature=WntB0OpIdU9v1BGKO8wD4A9wFiy8Nzu5o1LFvIh8ois-Mvn9i4-6ublSdKkEgXdU2CLpXKJBTRdESX2p9iS~-ExdwGBSi9peS1dbNy8KSiYLimAm3DWXhbfA5IsE8fTih6OFMKn~tl-ler-6lJ~gdLl6o3RLfZdLdxo6Sk29-dMyQeb9MlqEeGXTdrJVvFy1QP4d8igMOELIyf9Jyi2vqDBLfhoEKBLvEv9CnC9ihy7AY1Kh2sS4SjMncPnvyXPXpj7PfMb-SflgMDxIg~F2aRSkcUum22zpKEiM5u6n4L~YquqroeuIsD5tGzdWEzPOhaXqAkADnBNmMT7ymenLbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
							alt="infinity"
						/>
						<Header.Logo.Text>KAZMOS</Header.Logo.Text>
					</Header.Logo>

					<Header.NavBar>
						<Header.NavBar.List>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to="#talent">
									Talent
								</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to="#business">
									Business
								</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to="#roadmap">
									Roadmap
								</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<Header.NavBar.Link to="#about-us">
									About us
								</Header.NavBar.Link>
							</Header.NavBar.ListItem>
							<Header.NavBar.ListItem>
								<SmallButton to="">
									Join our Community
								</SmallButton>
							</Header.NavBar.ListItem>
						</Header.NavBar.List>
					</Header.NavBar>
				</Header.Container>
			</Header>
		</div>
	);
}
