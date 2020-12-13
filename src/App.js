import React from 'react';
import './App.css';
import Home from './Home/Home'
import { Switch,  Router  ,Route,Redirect } from "react-router-dom";
import Loan from './Loan/Loan';
import history from './History';

class App extends React.Component{
  render(){
    console.log()
    return(
      <Router history={history}  >
        
        
          <Route  path='/home' component={Home}/>
          <Route  path='/loan'  component={Loan} />
          
          <Redirect from="/" to="/home" />
            
            
        
      </Router>
      
    );
  }
}

export default App;
