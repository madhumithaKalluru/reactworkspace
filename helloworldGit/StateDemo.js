import React, {Component} from 'react'
class StateDemo extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Welcome to this page! This is a state demo.'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Congrats! You did it!'
        })
    }
    render(){
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick = {()=>this.changeMessage()}>Click me!</button>
         </div>
        )
    }
}
export default StateDemo