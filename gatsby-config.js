/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simple Recipes",
    description: "Nice and clean recipes site",
    author: "@johnsmilga",
    person: { name: "Gustavo", age: 22 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Gustavo", age: 22 },
      { name: "Amanda", age: 21 }      
    ]
  },
  
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `njwx7vl472k0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        // The api key has to go inside .env.development so it doesn't show up in the code on github.
        // then we have to pass the key with process.env.NAME
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
