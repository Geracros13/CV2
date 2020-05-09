import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import LabelStyled from "../styled/LabelStyled";
import Line from "../styled/Line";

const Experience = (props) => {
	return (
		<div className="Experience">
			<H2Styled name="Experience" />
			<Line />
			<div className="Experience-container">
				{props.data.map((expe, index) => (
					<div className="Experience-item" key={`Expe-${index}`}>
						<H3Styled>
							{expe.company}
							<br />
							{expe.jobTitle}
							<br />
							<LabelStyled>
								{expe.startDate} - {expe.endDate}
							</LabelStyled>
						</H3Styled>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
