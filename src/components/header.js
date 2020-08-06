import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby"
import logo from '../images/logo.png';

const ListLink = props => (
  <li style={{display: "inline-block", marginRight: "1rem", marginBottom: 0}}>
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
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <img style={{width: 30, height: 30, objectFit: "contain", marginRight: 8, marginBottom: 4}} src={logo} alt={"Logo"}/>
      <Link to={"/"} style={{ textShadow: 'none', backgroundImage: 'none', flex: 1}}>
        <h3 style={{ margin: 0 }}>
          {siteTitle}
        </h3>
      </Link>
      <ListLink to={"/"}>Home</ListLink>
      <ListLink to={"/posts/"}>Posts</ListLink>
      <ListLink to={"/about/"}>About</ListLink>
      <ListLink to={"/contact/"}>Contact</ListLink>
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
