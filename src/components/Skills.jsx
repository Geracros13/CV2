import React from "react";

const Skills = (props) => {
	return (
		<div className="Skills">
			<div className="Skills-container">
				{props.data.map((ski, index) => (
					<div className="Skills-item" key={`Skills-${index}`}>
						<h5>{ski.name}</h5>
						<div className="Skills-line">
							<span>{ski.percentage}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
