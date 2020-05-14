import React from "react";
import { createGlobalStyle } from "styled-components";
import Loader from "../styled/Loader";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import useGetData from "../hooks/useGetData";

const GlobalStyle = createGlobalStyle`
body{
	font-family: 'Lato', sans-serif;
	margin: 0;
	padding: 0;
	background: #fdfffc;
}
`;

const App = () => {
	const data = useGetData();

	return data.length === 0 ? (
		<Loader />
	) : (
		<Main>
			<GlobalStyle />
			<Sidebar>
				<About
					avatar={data.data.avatar}
					name={data.data.name}
					profession={data.data.profession}
					bio={data.data.bio}
					address={data.data.address}
					social={data.data.social}
				/>
			</Sidebar>
			<Info>
				<Education data={data.data.education} />
				<Experience data={data.data.experience} />
				<Certificates data={data.data.certificate} />
				<Skills data={data.data.skills} />
			</Info>
		</Main>
	);
};

export default App;
