import React from 'react'
import { Link } from 'gatsby'
import LogoImage from '../components/LogoImage'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#ffffff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          <LogoImage/>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
