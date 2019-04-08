import React from 'react'
import {graphql} from "gatsby";
import Layout from '../components/layout'
import OverviewItem from '../components/overview_item/overview_item'
import IngredientItem from '../components/ingredient_item/ingredient_item'
import Image from '../components/Image'
import Taxonomy from '../components/taxonomy/taxonomy'
import Price from "../components/Price";

class Recipe extends React.Component {

    render() {

        return (
            <Layout>
                {this.props.data.allNodeRecipe.edges.map(({ node }, key) => (
                    <div key={key}>
                        <h1> {node.title}</h1>
                        <Image image={node.relationships.field_image.uri.url} alt={node.title}/>
                        <Price nid={node.nid}/>
                        <OverviewItem label='Preparation time' labelValue={node.field_preparation_time} suffix='minutes' />
                        <OverviewItem label='Cooking time' labelValue={node.field_cooking_time} suffix='minutes' />
                        <OverviewItem label='Number of servings' labelValue={node.field_number_of_servings} suffix='' />
                        <OverviewItem label='Difficulty' labelValue={node.field_difficulty} suffix='' />

                        <br/>
                        <h3>Ingredients</h3>
                        {
                            node.field_ingredients.map((ingredient, key) => (
                            <IngredientItem key={key} ingredient={ingredient} />
                         ))}

                        <h3>Instructions</h3>

                        <div dangerouslySetInnerHTML={{__html: node.field_recipe_instruction.value}}></div>

                        <h3>Categories</h3>
                        <Taxonomy list={node.relationships.field_recipe_category} />

                        <h3>Tags</h3>
                        <Taxonomy list={node.relationships.field_tags} />

                    </div>
                ))}
            </Layout>
        )
    }

}
export default Recipe

export const recipeQuery = graphql`
  query RecipeDetails($recipeId: Int) {
      allNodeRecipe(filter : {drupal_internal__nid : {eq: $recipeId}}) {
        edges{
          node{
            title,
            drupal_internal__nid,
            path {
              alias
            }
            field_cooking_time
            field_difficulty
            field_ingredients
            field_number_of_servings
            field_preparation_time
            field_ingredients
            field_recipe_instruction{
                value
            }
            relationships{
              field_image {
                uri{
                  url
                  value
                }
              }
              field_tags {
                name
              }
              field_recipe_category {
                name
              }
            }
          }
        }
      }
  }
`