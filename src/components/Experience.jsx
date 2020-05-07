import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";

const Experience = (props) => {
	return (
		<div className="Experience">
			<H2Styled name="Experience" />
			<div className="Experience-container">
				{props.data.map((expe, index) => (
					<div className="Experience-item" key={`Expe-${index}`}>
						<H3Styled>
							{expe.company} - {expe.jobTitle}
							<span>
								- {expe.startDate} - {expe.endDate}
							</span>
						</H3Styled>
						<PStyled name={expe.jobDescription}></PStyled>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
