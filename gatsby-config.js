module.exports = {
  siteMetadata: {
    title: "A Deck of Negatives",
  },
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   // resolve: "gatsby-plugin-google-analytics",
    //   // options: {
    //   //   trackingId: "",
    //   // },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
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
