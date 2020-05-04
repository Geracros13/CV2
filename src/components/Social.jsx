import React from "react";

const Social = (props) => {
	return (
		<div className="social">
			{props.social && (
				<ul>
					{props.social.map((item, index) => (
						<li key={`Social-${index}`} target="_blank">
							<a href={item.url}>{item.name}</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Social;
