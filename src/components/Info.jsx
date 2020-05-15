import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

Info.propTypes = {
	optionalArray: PropTypes.array,
};

export default Info;
