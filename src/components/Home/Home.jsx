import React,{useState,useEffect} from 'react'
import Header from "../Header/Header";
import { CssBaseline, makeStyles } from "@material-ui/core";
import SideMenu from "../SideMenu/SideMenu";
import PriceContextWrapper from "../PriceList/PriceContextWrapper";

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: (props) => props.left,
  },
}));


export default function Home(props) {
  const [isAuth, setIsAuth] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("serviceUid") == null) {
      setIsAuth(false);
    }
    if (!isAuth) {
      props.history.push("/");
    }
    // console.log(localStorage.getItem("serviceUid"));
  }, []);
    const [hidden, setHidden] = useState(false);
    // let isMobile = (window.innerWidth < 1120)
    let left = hidden ? "0px" : "320px";
    const classes = useStyle({ left });
    
    return (
      <div>

        <SideMenu status={hidden} setStatus={setHidden} />
        <div className={classes.mainContainer}>
          <Header status={hidden} setStatus={setHidden} />
          <PriceContextWrapper />
        </div>
        <CssBaseline />
      </div>
    );
}
