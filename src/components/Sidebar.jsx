import React from "react";
import styled from "styled-components";

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

export default Sidebar;
