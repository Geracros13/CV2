import React from "react";
import { createGlobalStyle } from "styled-components";
import styled, { keyframes } from "styled-components";
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
	background: #101010;
}

`;

const spin = keyframes`
0% { transform: rotate(0deg) }
100% { transform: rotate(360deg) }

`;

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 75px;
	margin: 200px;
`;

const LoaderMobile = styled.div`
	@media only screen and (max-width: 767px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Loader = styled.div`
	border: 5px solid #101010;
	border-radius: 50%;
	border-top: 5px solid #ff1500;
	width: 50px;
	height: 50px;
	animation: ${spin} 2s linear infinite;
`;

const App = () => {
	const data = useGetData();
	console.log(data);
	// data.length === 0 ? <h1>Cargando...</h1>
	// Esta linea de codigo la pusimos porque necesitamos que primero traiga
	// la informacion de la API, y por eso mostramos cargando, ya cuando la trajo, carga el componente

	return data.length === 0 ? (
		<LoaderMobile>
			<LoaderContainer>
				<Loader></Loader>
			</LoaderContainer>
		</LoaderMobile>
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
