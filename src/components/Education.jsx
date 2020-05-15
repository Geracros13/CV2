import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import LabelStyled from "../styled/LabelStyled";
import Line from "../styled/Line";
import PropTypes from "prop-types";

const Education = (props) => {
	return (
		<div className="Education">
			<H2Styled name="Education" />
			<Line />
			<div className="Education-container">
				{props.data.map((edu, index) => (
					<div className="Education-item" key={`Edu-${index}`}>
						<H3Styled>
							{edu.institution}
							<br />
							{edu.degree}
							<br />
							<LabelStyled>
								{edu.startDate} - {edu.endDate}
							</LabelStyled>
						</H3Styled>
					</div>
				))}
			</div>
		</div>
	);
};

Education.propTypes = {
	optionalArray: PropTypes.array,
};

export default Education;
