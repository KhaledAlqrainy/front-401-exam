import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap/'

export class DataApi extends Component {
    render() {
        return (
            <div>
                {this.props.apiData.map((i,n)=> {
                        return(
                   <Card style={{ width: '18rem' }} key={n}>
                    <Card.Img variant="top" src={i.photo} />
                    <Card.Body>
                        
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>
                            {i.instructions}
                        </Card.Text>
                        <Button variant="primary" onClick={this.props.AddToFav}>Add To Favorite</Button>
                    </Card.Body>
                </Card>
                        )
                })
                
    }
            </div>
        )
    }
}

export default DataApi
