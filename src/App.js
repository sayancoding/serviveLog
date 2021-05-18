import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import Home from './components/Home/Home'
import SignIn from './components/SignIn/SignIn'

function App() {
  const [isAuth,setIsAuth] = useState(false);
  useEffect(() => {
    if(localStorage.getItem("serviceUid")){
      setIsAuth(true);
    }
  },[])
  
  return (
    <Router>
      <>
          {isAuth?<Redirect to='/home'/>:<Redirect to='/'/>}
          <Route path="/" exact component={SignIn}/>
          <Route path="/home" exact component={Home}/>
      </>
    </Router>
    
  );
}

export default App;
