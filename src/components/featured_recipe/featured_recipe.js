import React from 'react'
import './featured_recipe.css'
import { Link } from 'gatsby'
import Image from "../Image";


class FeaturedRecipe extends React.Component {

    render() {
        return (
            <Link to={this.props.alias}>
                <h3> {this.props.title}</h3>
                <i>{this.props.summary}</i>
                <Image image={this.props.image} alt={this.props.title}/>
            </Link>
        )
    }

}


export default FeaturedRecipe