import React from "react";
import { TopBackground } from "./styledComponents/BackgroundTop.styled";
import dna_strand_final_form from "../../img/dna_strand_final_form.png";

export function DividerImage() {
	return (
		<div>
			<TopBackground.second>
				<img src={dna_strand_final_form} className="trimmed-cover" />
			</TopBackground.second>
		</div>
	);
}
