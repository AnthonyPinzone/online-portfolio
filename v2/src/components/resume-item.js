import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class ResumeItem extends React.Component {
	handleDatesArray = (dates) => {
		return dates.map((date, i) =>
			dates.length === i + 1 ? date : `${date}, `
		);
	};

	render() {
		const { title, company, datesWorked, jobDetails, tags } = this.props;

		return (
			<article className="resume-item d-flex flex-column flex-md-row mb-5">
				<div className="resume-content mr-auto">
					<header className="resume-item-header">
						<h3 className="mb-0">{title}</h3>
						<div className="subheading text-secondary mb-0">
							{company.name}
							{company.dept && `, ${company.dept}`}{" "}
							{company.location && `(${company.location})`}
						</div>
						<ul className="resume-details list-unstyled mb-3">
							<li className="dates-worked">
								<FontAwesomeIcon
									icon={faClock}
									className="text-tertiary text-icon"
								/>
								<span className="text-tertiary">
									{Array.isArray(datesWorked)
										? this.handleDatesArray(datesWorked)
										: datesWorked}
								</span>
							</li>
							{company.website && (
								<li className="company-url">
									<FontAwesomeIcon
										icon={faExternalLinkAlt}
										className="text-tertiary text-icon"
									/>
									<a
										className="text-tertiary"
										target="_blank"
										rel="noreferrer"
										href={company.website.url}
									>
										{company.website.displayName}
									</a>
								</li>
							)}
						</ul>
					</header>
					<section className="resume-item-content">
						<p className="mb-3 font-italic">
							{company.description}
						</p>
						<ul className="mb-3 pl-4">
							{jobDetails.map((jobDetail) => (
								<li
									dangerouslySetInnerHTML={{
										__html: jobDetail,
									}}
								/>
							))}
						</ul>
					</section>
					<footer className="resume-item-footer d-print-none">
						<div className="resume-tags">
							{tags.map((tag) => (
								<span className="badge badge-pill badge-primary">
									{tag}
								</span>
							))}
						</div>
					</footer>
				</div>
			</article>
		);
	}
}

export default ResumeItem;
