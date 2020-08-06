import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import Img from 'gatsby-image';

const Image = ({filename}) => {
  const data = useStaticQuery(graphql(`
    query {
      placeholderImage: file(relativePath: {eq: "${filename}" }) {
        childImageSharp {
          fluid() {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `));

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image;