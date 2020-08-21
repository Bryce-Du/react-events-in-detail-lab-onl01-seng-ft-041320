// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        let arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
    }
    
    render(){
        return (
            <div><button onClick={this.handleClick}/></div>
        )
    }
}