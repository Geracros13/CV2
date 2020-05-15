import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import LabelStyled from "../styled/LabelStyled";
import Line from "../styled/Line";
import PropTypes from "prop-types";

const Certificates = (props) => {
	return (
		<div className="Certificates">
			<H2Styled name="Certificates" />
			<Line />
			<div className="Certificates-container">
				{props.data.map((cert, index) => (
					<div className="Certificates-item" key={`Certificate-${index}`}>
						<H3Styled>
							{cert.name}
							<br />
							{cert.institution}
							<br />
							<LabelStyled>{cert.date}</LabelStyled>
						</H3Styled>
					</div>
				))}
			</div>
		</div>
	);
};

Certificates.propTypes = {
	optionalArray: PropTypes.array,
};

export default Certificates;
