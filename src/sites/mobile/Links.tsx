import React from 'react'
import './Links.scss'
import { Link } from 'react-router-dom'
import pkg from '../../config.json'

const navs = pkg.nav

const Links = () => {
  return (
    <>
      {navs.map((nav) => (
        <ol key={nav.name}>
          <li>{nav.name}</li>
          <ul>
            {nav.packages.map((com) => (
              <li key={com.name}>
                <Link key={com.name} to={`${com.name}`}>
                  {com.name}
                </Link>
              </li>
            ))}
          </ul>
        </ol>
      ))}
    </>
  )
}
export default Links
