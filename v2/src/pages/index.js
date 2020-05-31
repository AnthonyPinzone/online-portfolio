import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ResumeSection from "../components/resume-section";
import ResumeItem from "../components/resume-item";
import SocialIcons from "../components/social-icons";

import Jobs from "../data/jobs.json";

const IndexPage = () => (
	<Layout>
		<SEO />

		<ResumeSection id="about">
			<h1 class="mb-5 d-none d-lg-block">
				Anthony
				<span class="text-primary"> Pinzone</span>
			</h1>
			<p class="mb-2 h3">
				Improving
				<span class="text-secondary"> the web starts with</span>{" "}
				improving
				<span class="text-secondary"> you</span>rself.
			</p>
			<p class="mb-5 text-mute">
				I'm a self-taught UI Developer with a passion for continuous
				learning. Through online resources and on-the-job training I've
				become well-versed in responsive design techniques using HTML
				and CSS, interactive interface development with Javascript,
				React and Typescript, server-side templating with Adobe
				Coldfusion and content management with Wordpress and Drupal.
			</p>
			<SocialIcons />
		</ResumeSection>

		<ResumeSection id="experience">
			<h2 class="mb-5">
				E<span class="text-primary">xp</span>erience
			</h2>

			{Jobs.map((job) => (
				<ResumeItem {...job} />
			))}
		</ResumeSection>
	</Layout>
);

export default IndexPage;
