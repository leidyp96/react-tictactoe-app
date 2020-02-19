import React from 'react';
import './App.css';
import Game from './components/TicTacToe/index.js';
import Login from './components/login/index.js';
import Register from './components/register/index.js';





class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {loggedIn:false,
    users:[{username:"test",password:"test"}]
    }
  }
  logInUser(loggedInStatus){
    this.setState({loggedIn:loggedInStatus});
  }
  render(){
    return (
    (!this.state.register) ? 
    <Register />
    :
    (!this.state.loggedIn) ?
    <Login users={this.state.users}
    logInUser ={()=> this.logInUser(true)} />
    :
    <Game logOutUser={() => this.logInUser(false)} />
    )
  }  
}

export default App;
