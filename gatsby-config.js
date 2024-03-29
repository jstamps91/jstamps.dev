require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
//import aboutData from './about'
const aboutData = require('./config')

module.exports = {
  pathPrefix: `/`,
  ...aboutData,
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
    'Mdx.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts',
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-remark-code-title',
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'jstamps91',
              includeDefaultCss: true,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=1]': 'md-h1',
                'heading[depth=2]': 'md-h2',
                'heading[depth=3]': 'md-h3',
                'heading[depth=4]': 'md-h4',
                'heading[depth=5]': 'md-h5',
                'heading[depth=6]': 'md-h6',
                paragraph: 'md-p',
                'list[ordered=false]': 'md-ul',
                'list[ordered=true]': 'md-ol',
                listItem: 'md-li',
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              quality: 100,
              showCaptions: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `80`,
            },
          },
          'gatsby-remark-external-links',
          'gatsby-remark-smartypants',
        ],
        plugins: [
          'gatsby-remark-embed-video',
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-remark-code-title',
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'jstamps91',
              includeDefaultCss: true,
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=1]': 'md-h1',
                'heading[depth=2]': 'md-h2',
                'heading[depth=3]': 'md-h3',
                'heading[depth=4]': 'md-h4',
                'heading[depth=5]': 'md-h5',
                'heading[depth=6]': 'md-h6',
                paragraph: 'md-p',
                'list[ordered=false]': 'md-ul',
                'list[ordered=true]': 'md-ol',
                listItem: 'md-li',
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              quality: 100,
              showCaptions: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              includedSelector: '#post_body p img',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `80`,
            },
          },
          'gatsby-remark-external-links',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-GZEP20H0LZ',
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'jstamps.dev',
        cookieExpires: 86400,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#1976d2',
        showSpinner: false,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Joshua Stamps',
        short_name: 'jstamps',
        start_url: '/',
        icon: 'src/assets/images/logo.png',
        background_color: '#E1524A',
        theme_color: '#000',
        display: 'standalone',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MAILCHIMP_LIST || '',
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
}
