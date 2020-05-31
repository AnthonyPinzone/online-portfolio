module.exports = {
	siteMetadata: {
		title: `Anthony Pinzone | UI Developer`,
		description: ``,
		author: `@the1andonlypz`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`,
			},
		},
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: [
						"Saira Extra Condensed:100,200,300,400,500,600,700,800,900",
						"Open Sans:300,300i,400,400i,600,600i,700,700i,800,800i",
					],
				},
			},
		},
	],
};
