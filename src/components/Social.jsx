import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const SocialStyled = styled.div`
	margin: 0;
	display: block;
`;

const SocialUL = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

const SocialLi = styled.li`
	display: inline;
	margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
	color: #212121;
	text-decoration: none;
	font-size: 1.2em;
`;

const SocialIcon = styled.i`
	color: ${(props) => props.theme.color};
`;

const facebook = {
	color: "#3b5998",
};

const twitter = {
	color: "#38a1f3",
};

const linkedin = {
	color: "#0e76a8",
};

const github = {
	color: "#333",
};

const getColor = (name) => {
	if (name === "facebook") return facebook;
	if (name === "twitter") return twitter;
	if (name === "linkedin") return linkedin;
	if (name === "github") return github;
};

const Social = (props) => {
	return (
		<SocialStyled>
			{props.social && (
				<SocialUL>
					{props.social.map((item, index) => (
						<SocialLi key={`Social-${index}`} target="_blank">
							<SocialAnchor href={item.url}>
								<ThemeProvider theme={getColor(item.name)}>
									<SocialIcon className={`fa fa-${item.name}`} />
								</ThemeProvider>
							</SocialAnchor>
						</SocialLi>
					))}
				</SocialUL>
			)}
		</SocialStyled>
	);
};

Social.propTypes = {
	optionalArray: PropTypes.array,
};

export default Social;
