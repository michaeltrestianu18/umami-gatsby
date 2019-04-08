import React from 'react';
import axios from 'axios'

class Price extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            price: null,
        };
        this.getRecepiePrice()
    }

    componentDidMount() {
        setInterval(() => this.getRecepiePrice(), 1000)
    }

    getRecepiePrice() {
        let rand = Math.floor(Math.random() * 2) + 1;

        axios.get('http://localhost:8002/fake'+ rand + '.json')
        .then(response => {
            for (var i = 0; i < response.data.nodes.length; i++) {
                if (this.props.drupal_internal__nid === response.data.nodes[i].drupal_internal__nid) {
                    this.setState({
                        price: response.data.nodes[i].Price
                    })
                }
            }
        });
    }

    render() {
        return (
            <div>£{this.state.price} </div>
        );
    }
}
export default Price;