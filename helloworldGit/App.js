import logo from './logo.svg';
import './App.css';
import Greetfn from './components/Greetfn'
import Greetclass from './components/Greetclass'
import Myname from './components/Myname'
import Mkalluru from './components/Mkalluru'
import StateDemo from './components/StateDemo'
import { Component } from 'react';
import EventBindingDemo from './components/EventBindingDemo';
class App extends Component{
  render(){
  return (
    <div className="App">
      {/*<Greetfn name="Madhu" initial="K"/>*/}
      {/*<Greetfn name="Swetha" initial="P"/>*/}
      {/*<Greetfn name="Nivi" initial="S"/>*/}
      {/*<StateDemo />*/}
     { /*<Greetclass />*/}
      {/*<Myname />*/}
     {/* <Mkalluru />*/}
     <EventBindingDemo />
    </div>
  );
}
}
export default App;
