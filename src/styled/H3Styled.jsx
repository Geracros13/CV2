import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
	font-weight: 300;
	margin: 0.5em 0 0 0;
	color: #1b262c;
	text-align: center;
`;

const H3Styled = ({ children }) => <StyledH3>{children}</StyledH3>;

export default H3Styled;
