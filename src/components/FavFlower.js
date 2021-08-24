import axios from 'axios';
import React, { Component } from 'react'

export class FavFlower extends Component {

    constructor(props){
        super(props);

        this.state={
            url:`http://localhost:3050`,
            apiCrud:[],
            shoeCrud:false,
            updateData:{},
            showModal:false
        }


        componentDidMount = async () =>{
            const req = axios.get('http://localhost:3050/flowers')
            this.serState({
                apiCrud:req.data,
                showCrud:true
            })
        }

    }

    deleteFlowers = async (i)=> {
        axios.delete(`http://localhost:3050/flowers/${id}`)
        const items = this.state.apiCrud.filter(i=>i._id !== id)
        this.setState({apiCrud:items})

    }

    handlerModal = (item) => {this.setState({showModal:true, updateData:item})}

    updateFlowers = (e) => {
        const id = this.state.updateData._id;
        const body = { instructions=e.target.instructions.value,
        name=e.target.name.value,
    photo=e.target.name.value}
    const req = axios.put(`http://localhost:3050/flowers/${id}`, body)
    const newItem = this.state.apiCrud.map(i => {
        if (i._id === id){
            i.instructions=req.data.instructions
            return i
        }
        return i
    })
    this.setState ({apiCrud:newItem})
    this.handlerModal({});
    this.setState({showModal:false});
    }

    close = () => {
        this.setState({showModal:false})
    }
    render() {
        return (
            <div>
                {this.state.shoeCrud && 
                <FavCards apiCrud={this.state.apiCrud}
                deleteFlowers={this.state.updateFlowers} 
                handlerModal={this.state.handlerModal}
                />}
                {this.state.showModal}
            </div>
        )
    }
}

export default FavFlower
