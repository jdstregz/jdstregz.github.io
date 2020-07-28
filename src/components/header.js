import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby"

const ListLink = props => (
  <li style={{display: "inline-block", marginRight: "1rem"}}>
    <Link style={{color: '#000', backgroundImage: 'none'}} to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to={"/"} style={{ textShadow: 'none', backgroundImage: 'none'}}>
        <h3 style={{ margin: 0, display: "inline" }}>
          {siteTitle}
        </h3>
      </Link>
      <ul style={{listStyle: 'none', float: 'right'}}>
        <ListLink to={"/"}>Home</ListLink>
        <ListLink to={"/posts/"}>Posts</ListLink>
        <ListLink to={"/about/"}>About</ListLink>
        <ListLink to={"/contact/"}>Contact</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
