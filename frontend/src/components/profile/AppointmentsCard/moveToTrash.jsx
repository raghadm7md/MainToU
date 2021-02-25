import React, { Component } from 'react'
import Trash from '../Trash'

export default class moveToTrash extends Component {
    
    render() {
        console.log("moveToTrash",this.props.array)
        return (
            <div>
                <h2>hiiii</h2>
                <Trash trash={this.props.array}></Trash>
            </div>
        )
    }
}
