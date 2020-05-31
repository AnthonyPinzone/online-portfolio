import React from "react";

const ResumeSection = ({ id, children }) => {
	return (
		<section id={id} className="resume-section p-3 p-lg-5 d-flex d-column">
			<div class="my-auto">{children}</div>
		</section>
	);
};

export default ResumeSection;
