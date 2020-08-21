import React, { useMemo } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '@/components/Layout';

export default function Posts({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data;

  const postsData = useMemo(() => {
    return edges.map(({ node }) => ({ title: node.frontmatter.title, slug: node.fields.slug }));
  }, [edges]);

  return (
    <Layout>
      {postsData.map(post => (
        <Link key={post.slug} to={post.slug}>
          <h6>{post.title}</h6>
        </Link>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
