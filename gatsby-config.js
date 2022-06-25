module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://fantastic-croissant-5a6f02.netlify.app/`,
    // Your Name
    name: 'Elad Kishon',
    // Main Site Title
    title: `Elad Kishon`,
    // Description that goes under your name in main bio
    description: `I build things`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/eladkishon`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/eladkishon/`,
    medium: `https://medium.com/@eladk`,
    // Content of the About Me section
    about: `Second engineer and team lead at Rise.ai later acquired by Wix.com,  
             alumni of top israeli intelligence technology unit, open source advocate.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [
    //   {
    //     name: `Project 1`,
    //     description: `Description of project 1`,
    //     link: ``
    //   }
    // ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    // experience: [
    // ],
    // Optional: List your skills, they must have `name` and `description`.

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `eladkishon`,
        short_name: `eladk`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: ``,
      },
    },
  ],
};
