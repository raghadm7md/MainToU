import React, { Component } from 'react'
import { getAllmintsCompany } from "./Api";
import Company from "../Admin/Company"



export default class Axios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mintsCompany:''
        };
      }


    componentDidMount() {
        // console.log("Component DID MOUNT!");
    
        getAllmintsCompany()
          .then((response) => {
            console.log("RES: ", response.data);
            this.setState({mintsCompany : response.data})
          })
          .catch((error) => {
            console.log("API ERROR:", error);
          });
       }

    render() {
        return (
            <div>
                <Company mintsCompany={this.state.mintsCompany} ></Company>
            </div>
        )
    }
}
