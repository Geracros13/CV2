import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
	padding-left: 5px;
`;

const Info = ({ children }) => {
	return (
		<InfoContainer>
			<div className="Info-container">{children}</div>
		</InfoContainer>
	);
};

export default Info;
