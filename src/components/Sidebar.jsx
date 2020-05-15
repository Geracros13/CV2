import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SidebarC = styled.div`
	padding: 0.8em;
`;

const Sidebar = ({ children }) => {
	return (
		<SidebarC>
			<div className="Sidebar-container">{children}</div>
		</SidebarC>
	);
};

Sidebar.propTypes = {
	optionalArray: PropTypes.array,
};

export default Sidebar;
