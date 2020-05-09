import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	letter-spacing: 0.8px;
	margin: 1em 0 0 0;
	color: #0f4c81;
	text-align: center;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>;

export default H2Styled;
