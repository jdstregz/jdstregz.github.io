import React from 'react';
import { graphql, Link } from "gatsby";
import Layout from '../components/layout';

const Posts = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <h1>
        Posts
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{textDecoration: 'none', color: 'inherit'}}
            >
            <h3>
              {node.frontmatter.title}{" "}
              <span style={{color: '#bbb'}}>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default Posts;

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          timeToRead
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;