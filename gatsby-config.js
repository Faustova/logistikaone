module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: "phc_nFJ8UUD4luvrPZ7Ef8WIkC4UyrbbfSUmhytE8sVqNjf",
        head: true,
		    isEnabledDevMode: true
      },
    },
  ]
};
