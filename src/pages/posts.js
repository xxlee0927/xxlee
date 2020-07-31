import React from 'react';
import { graphql } from 'gatsby';

export default function posts({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data;

  const postsData = edges.map(edge => edge.node.frontmatter);
  return (
    <div>
      {postsData.map(post => (
        <div>
          <h6>{post.title}</h6>
        </div>
      ))}
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
