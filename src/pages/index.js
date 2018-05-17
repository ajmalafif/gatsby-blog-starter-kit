import React from 'react'
import GatsbyLink from 'gatsby-link'
import Helmet from 'react-helmet'

import Link from '../components/Link'

import '../css/index.css'

const isFontLoaded = '<!--#if expr="$HTTP_COOKIE=/fonts\-loaded\=true/" -->'
export default () =>
  <div className='pa4 link dim'>
    <a href="/blog" className='headline gray f2'>
      Go to blog
  </a>
    <Helmet>
      <html lang='en' className={isFontLoaded ? 'fonts-loaded' : null} />
    </Helmet>
  </div>
