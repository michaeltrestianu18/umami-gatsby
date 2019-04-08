/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const Promise = require('bluebird')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const recipeTemplate = path.resolve(`./src/templates/recipe.js`)
        resolve(
            graphql(
                `
              {
                allNodeRecipe {
                    edges{
                      node{
                        drupal_internal__nid,
                        path {
                          alias
                        }
                      }
                    }
                }
              }
        `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }
                // Create blog post pages.
                result.data.allNodeRecipe.edges.forEach(edge => {
                    createPage({
                        path: `${edge.node.path.alias}`, // required
                        component: recipeTemplate,
                        context: {
                            // Add optional context data. Data can be used as
                            // arguments to the page GraphQL query.
                            //
                            // The page "path" is always available as a GraphQL
                            // argument.
                                recipeId: edge.node.drupal_internal__nid
                            },
                    })
                })

                return
            })
        )
    })
}