import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledP = styled.p`
	font-weight: 300;
	margin: 0.5em 0 1.2em 0;
	color: #999999;
`;

const PStyled = ({ name }) => <StyledP>{name}</StyledP>;

PStyled.propTypes = {
	name: PropTypes.string.isRequired,
};

export default PStyled;
