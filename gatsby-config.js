module.exports = {
  siteMetadata: {
    title: "A Deck of Negatives",
    siteUrl: `https://www.deckofnegatives.com`,
    description: `A game of lies and deceit`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-187990682-1",
      },
    },
    {
     resolve: "gatsby-plugin-sharp",
     options: {
       icon: 'srv/images/favicon.png'
     }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
