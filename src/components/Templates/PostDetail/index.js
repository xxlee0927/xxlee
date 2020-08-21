import React from 'react';
import Layout from '@/components/Layout';
import { graphql } from 'gatsby';

export default function TemplatePost({ data }) {
  const post = data.markdownRemark;
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
