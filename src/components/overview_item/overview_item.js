import React from 'react'
import './overview_item.css'

class OverviewItem extends React.Component {

    render() {
        return (
            <div>

                <span className='label' >{this.props.label}:</span> <span>{this.props.labelValue} {this.props.suffix}</span>

            </div>
        )
    }

}


export default OverviewItem