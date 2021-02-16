/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby practice tutorial",
    description: "description",
    author: "Shoaib",
    data: ["item 1", "item 2"],
    person: { name: "John Doe", age: "30" },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `53249e4foyk0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
  ],
}
