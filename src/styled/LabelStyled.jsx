import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
	font-weight: 300;
	margin: 0.5em 0 0 0;
	color: #1b262c;
	text-align: center;
	font-style: italic;
	font-size: 0.8em;
`;

const LabelStyled = ({ children }) => <StyledLabel>{children}</StyledLabel>;

LabelStyled.propTypes = {
	optionalArray: PropTypes.array,
};

export default LabelStyled;
