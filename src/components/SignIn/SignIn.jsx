import React,{useState,useEffect} from 'react'
import {signWithGoogle} from '../../firebase.config'
import {makeStyles,Button} from '@material-ui/core'
import 'boxicons';

const useStyle = makeStyles(theme=>({
  container:{
    marginTop:'50px',
    color:theme.palette.primary.dark,
    textAlign:'center'
  }
}))

export default function SignIn(props) {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
      if (localStorage.getItem("serviceUid") !== null) {
        setIsAuth(true);
      }
      if (isAuth) {
        props.history.push("/home");
        window.location.reload();
      }
    }, []);
    const classes = useStyle();
    return (
      <>
        <div className={classes.container}>
          <h1>SERVICE LOG</h1>
          <p>"Make your pocket price sheet"</p>
          <Button type="fill" onClick={signWithGoogle}>Sign in with Google</Button>
        </div>
      </>
    );
}
