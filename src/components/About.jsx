import React from "react";
import Social from "./Social";
import styled from "styled-components";
import PropTypes from "prop-types";

const AboutStyle = styled.div`
	text-align: center;
`;
const AboutAvatar = styled.div`
	padding: 2em 0 0 0;
`;
const AboutImg = styled.img`
	border-radius: 100%;
	width: 200px;
	height: 200px;
	border: 2px solid #0f4c81;
	margin: 0 auto;
	display: block;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	object-fit: cover;
`;
const AboutName = styled.div`
	text-align: center;
`;
const AboutH2 = styled.h2`
	font-family: "Roboto", sans-serif;
	font-weight: 400;
	letter-spacing: 1.2px;
	margin: 0.5em 0 0 0;
	color: #0f4c81;
`;
const AboutProfession = styled.p`
	margin: 0.2em 0 1em 0;
	letter-spacing: 1.6px;
	font-weight: 300;
	color: #1b262c;
`;
const AboutBio = styled.p`
	color: #1b262c;
	font-size: 1em;
	font-weight: 300;
`;
const AboutLocation = styled.p`
	color: #0f4c81;
	font-size: 1em;
	font-weight: 400;
`;

const About = ({ avatar, name, profession, bio, address, social }) => {
	return (
		<AboutStyle>
			<div className="About-container">
				<AboutAvatar>
					<figure>
						<AboutImg src={avatar} alt={name} />
					</figure>
				</AboutAvatar>
				<AboutName>
					<AboutH2>{name}</AboutH2>
				</AboutName>
				<div className="About-profession">
					<AboutProfession>{profession}</AboutProfession>
				</div>
				<div className="About-description">
					<AboutBio>{bio}</AboutBio>
				</div>
				<div className="About-location">
					<AboutLocation>{address}</AboutLocation>
				</div>
				<div className="About-social">
					<Social social={social} />
				</div>
			</div>
		</AboutStyle>
	);
};

About.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	profession: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	social: PropTypes.array.isRequired,
};

export default About;
