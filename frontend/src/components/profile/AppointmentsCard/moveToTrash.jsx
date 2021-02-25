import React, { Component } from 'react'
import Trash from '../Trash'

export default class moveToTrash extends Component {
    read=()=>{
        console.log("moveToTrash",this.props.array)
    }
    render() {
        console.log("moveToTrash",this.props.array)
        return (
            <div>
                <Trash trash={this.props.array}></Trash>
            </div>
        )
    }
}
