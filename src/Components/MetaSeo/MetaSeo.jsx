import React from 'react'
import { Helmet } from 'react-helmet'

const MetaSeo = ({ title, description, keyword = '' }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
    </Helmet>
  )
}

export default MetaSeo
