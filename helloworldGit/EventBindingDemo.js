import React, {Component} from 'react'
class EventBindingDemo extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            message : 'Welcome'
        }
        this.clickHandler= this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     {this.setState ({message : 'Thanks for visiting!'})
    //     console.log(this)
    // }
    clickHandler = () =>{
        this.setState({
            message : 'Thanks for visiting!'
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
               {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
               {/*} <button onClick={()=>this.clickHandler()}>Click</button>*/}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default EventBindingDemo