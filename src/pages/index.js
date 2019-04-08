import React from 'react'
import FeaturedRecipe  from '../components/featured_recipe/featured_recipe'
import Layout from '../components/layout'

export const query = graphql` {
  allNodeRecipe (filter: {promote: {eq:true}}) {
    edges{
      node{
        title,
        drupal_internal__nid,
        path {
          alias
        }
        field_summary{
          value
        }
        relationships{
          field_image {
            uri{
              url
              value
            }
          }
        }
      }
    }
  }
}`


class Index extends React.Component {
    render() {
        return (
            <Layout>
                <h2>Explore recipes across every type of occasion, ingredient, and skill level</h2>
            { this.props.data.allNodeRecipe.edges.map((edge, key) => (
                // console.log(edge.node.path.alias)
                <FeaturedRecipe summary={edge.node.field_summary.value} key={key} image={edge.node.relationships.field_image.uri.url} title={edge.node.title} alias={edge.node.path.alias} />

            ))}
            </Layout>
        )
    }
}

export default Index
