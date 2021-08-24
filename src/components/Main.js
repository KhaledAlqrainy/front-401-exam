import axios from 'axios';
import React, { Component } from 'react'
import DataApi from './DataApi'

export class Main extends Component {

    constructor(props){
        super(props);
        this.state ={
            url:'http://localhost:3050/',
            apiData:[],
            showData:false
        }
    }


componentDidMount = async() => {
    const req = axios.get('http://localhost:3050/');
    this.setState({apiData:req.data,
    showData:true})
}

AddToFav = async (i) => {
    const req = axios.post('http://localhost:3050/flowers',i)
    console.log(req.data);

}






    render() {
        return (
            <div>
                {this.state.showData &&
                <DataApi apiData={this.state.apiData}
                         AddToFav={this.state.AddToFav}    />
    }
                
            </div>
        )
    }
}

export default Main
