import React from "react";
import styled from "styled-components";

const LineContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LineChildren = styled.div`
	height: 1px;
	width: 50px;
	background-color: #0f4c81;
`;

const Line = () => (
	<LineContainer>
		<LineChildren></LineChildren>
	</LineContainer>
);

export default Line;
