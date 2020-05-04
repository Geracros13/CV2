import React from "react";

const Experience = (props) => {
	return (
		<div className="Experience">
			<div className="Experience-container">
				{props.data.map((expe, index) => (
					<div className="Experience-item" key={`Expe-${index}`}>
						<h3>
							{expe.company} - {expe.jobTitle}
						</h3>
						<p>{expe.jobDescription}</p>
						<span>
							{expe.startDate} - {expe.endDate}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
