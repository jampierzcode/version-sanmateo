module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "laboratoriosanmateo",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
