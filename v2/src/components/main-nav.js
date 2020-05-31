import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
	Collapse,
} from "reactstrap";

import NavLinks from "../data/navigation.json";

const MainNav = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
				childImageSharp {
					fixed(width: 160) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar id="sideNav" className="bg-dark" expand="lg" fixed="top" dark>
			<NavbarBrand href="#page-top">
				<h1 className="d-block d-lg-none">
					Anthony<span className="text-primary">Pinzone</span>
				</h1>
				<Img
					className="d-none d-lg-block img-profile rounded-circle mx-auto mb-2"
					alt="Anthony Pinzone"
					fluid={data.placeholderImage.childImageSharp.fixed}
				/>
			</NavbarBrand>

			<NavbarToggler onClick={toggle} />

			<Collapse isOpen={isOpen} navbar>
				<Nav navbar>
					{NavLinks.map((link) => (
						<NavItem>
							<NavLink
								href={link.url}
								target={link.newPage && "_blank"}
								rel={link.newPage && "noreferrer"}
								className={link.highlighted && "text-secondary"}
							>
								{link.name}
							</NavLink>
						</NavItem>
					))}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default MainNav;
