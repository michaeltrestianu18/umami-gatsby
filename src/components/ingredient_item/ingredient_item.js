import React from 'react'
import './ingredient_item.css'

class IngredientItem extends React.Component {

    render() {
        return (
            <ul>

                <li> {this.props.ingredient} </li>

            </ul>
        )
    }

}


export default IngredientItem