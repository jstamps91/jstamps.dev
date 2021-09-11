import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import avatar from '../assets/images/logo.png'

export default class SEO extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    isPost: PropTypes.bool,
  }

  static defaultProps = {
    title: 'Joshua Stamps',
    image: `https://jstamps.dev${avatar}`,
    url: 'https://jstamps.dev/',
    description: 'Joshua Stamps - Software Engineer',
    isPost: false,
  }

  render() {
    const { image, url, description, isPost } = this.props
    const title = (this.props.title === '' ? '' : `${this.props.title} · `) + 'Joshua Stamps'
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        sameAs: [
          'https://twitter.com/stamps_dev',
          'https://plus.google.com/u/0/101542534057875808813',
          'https://www.github.com/jstamps91',
          'https://www.linkedin.com/in/joshua-stamps',
        ],
        url: url,
        name: title,
        alternateName: description,
      },
    ]

    if (isPost) {
      schemaOrgJSONLD.push([
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          sameAs: [
            'https://twitter.com/stamps_dev',
            'https://plus.google.com/u/0/101542534057875808813',
            'https://www.github.com/jstamps91',
            'https://www.linkedin.com/in/joshua-stamps',
          ],
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image: image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          sameAs: [
            'https://twitter.com/stamps_dev',
            'https://plus.google.com/',
            'https://www.github.com/jstamps91',
            'https://www.linkedin.com/in/joshua-stamps',
          ],
          url: url,
          name: title,
          alternateName: `${url} | Joshua Stamps`,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        },
      ])
    }

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@stamps_dev" />
        <meta name="twitter:creator" content="@stamps_dev" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}
