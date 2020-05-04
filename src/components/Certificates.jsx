import React from "react";

const Certificates = (props) => {
	return (
		<div className="Certificates">
			<div className="Certificates-container">
				{props.data.map((cert, index) => (
					<div className="Certificates-item" key={`Certificate-${index}`}>
						<h3>
							{cert.name} - {cert.institution}
						</h3>
						<p>{cert.description}</p>
						<span>{cert.date}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Certificates;
