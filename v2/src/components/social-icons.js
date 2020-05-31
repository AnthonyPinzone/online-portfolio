import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPodcast } from "@fortawesome/free-solid-svg-icons";
import {
	faCodepen,
	faTwitter,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => (
	<ul class="social-icons list-inline mb-0 text-center d-print-none">
		<li class="list-inline-item">
			<a
				href="https://codepen.io/collection/XModjq/"
				target="_blank"
				rel="noreferrer"
				title="Codepen"
			>
				<span class="fa-layers fa-fw">
					<FontAwesomeIcon icon={faCircle} transform="grow-16" />
					<FontAwesomeIcon icon={faCodepen} inverse />
				</span>
			</a>
		</li>
		<li class="list-inline-item">
			<a
				href="https://twitter.com/the1andonlypz"
				target="_blank"
				rel="noreferrer"
				title="Twitter"
			>
				<span class="fa-layers fa-fw">
					<FontAwesomeIcon icon={faCircle} transform="grow-16" />
					<FontAwesomeIcon icon={faTwitter} inverse />
				</span>
			</a>
		</li>
		<li class="list-inline-item">
			<a
				href="https://www.linkedin.com/in/anthonyjpinzone"
				target="_blank"
				rel="noreferrer"
				title="LinkedIn"
			>
				<span class="fa-layers fa-fw">
					<FontAwesomeIcon icon={faCircle} transform="grow-16" />
					<FontAwesomeIcon icon={faLinkedinIn} inverse />
				</span>
			</a>
		</li>
		<li class="list-inline-item">
			<a
				href="https://itunes.apple.com/us/podcast/the-fantasy-authority-fantasy-football-podcast/id1034958991?mt=2"
				target="_blank"
				rel="noreferrer"
				title="iTunes"
			>
				<span class="fa-layers fa-fw">
					<FontAwesomeIcon icon={faCircle} transform="grow-16" />
					<FontAwesomeIcon icon={faPodcast} inverse />
				</span>
			</a>
		</li>
	</ul>
);

export default SocialIcons;
