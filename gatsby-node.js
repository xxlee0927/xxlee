const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: `/posts${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/components/Templates/PostDetail/index.js'),
      context: {
        // for GraphQL
        slug: node.fields.slug,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src') },
    },
  });
};
