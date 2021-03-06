import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {CssBaseline, makeStyles} from '@material-ui/core'
import SideMenu from './components/SideMenu/SideMenu';
import PriceContextWrapper from './components/PriceList/PriceContextWrapper'

const useStyle = makeStyles(theme=>({
  mainContainer:{
    paddingLeft: (props) => props.left
  }
}))

function App() {
  const [hidden,setHidden] =  useState(false)
  // let isMobile = (window.innerWidth < 1120)
  let left = (hidden)?"0px":"320px"
  const classes = useStyle({left});
  return (
    <>
      <SideMenu status={hidden} setStatus={setHidden}/>
      <div className={classes.mainContainer}>
        <Header status={hidden} setStatus={setHidden} />
        <PriceContextWrapper/>
      </div>
      <CssBaseline/>
    </>
  );
}

export default App;
