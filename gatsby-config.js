module.exports = {
  siteMetadata: {
    title: 'Umami',
    drupalUrl: `http://localhost:8001`
  },
  plugins: [
    {
        resolve: `gatsby-source-drupal`,
        options: {
            baseUrl: `http://localhost:8001/`,
            apiBase: `jsonapi`,
        },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
