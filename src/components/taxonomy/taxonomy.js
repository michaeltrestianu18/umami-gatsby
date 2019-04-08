import React from 'react'
import './taxonomy.css'


class Taxonomy extends React.Component {

    render() {
        if (this.props.list) {

            return (
                <div>
                    <ol>
                    {this.props.list.map((item, key) => (
                        <li key={key}>
                            {item.name}
                        </li>
                    ))}

                    </ol>

                </div>
            )
        }
        return (<div>none</div>)
    }

}


export default Taxonomy