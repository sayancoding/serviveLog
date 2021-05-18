import React,{useState,useEffect} from 'react'
import {makeStyles} from "@material-ui/core"
import {firestore} from '../../firebase.config.js'
import 'boxicons';
import {IconButton} from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: (props) => props.width,
    height: "100%",
    backgroundColor: "#5A20CB",
  },
  menuContainer: {
    textAlign: "center",
    color: "#fff",
    cursor: "pointer",
  },
  userText: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#1B98F5",
    display: "block",
    padding: "4px 0px"
  },
}));

export default function SideMenu(props) {
  const [userData,setUserData] = useState();
  const fetchUserData = async (id) =>{
    const userCollect = firestore.collection(
      `users`
    ).doc(id)
    const data = await userCollect.get();
    if(data.exists){
      setUserData(data.data())
    }else{
      return;
    }
    console.log(userData)
  }
  useEffect(()=>{
    fetchUserData(localStorage.getItem("serviceUid"))
  },[])

 function logout(){
   localStorage.removeItem("serviceUid");
   window.location.reload();
 }
  // let isMobile = (window.innerWidth < 1120)
  let width = (props.status) ? "0px":"320px";
  // width = (window.innerWidth < 1120)?"0px":"320px";
    const classes = useStyle({width});
    function setStatus() {
        props.setStatus(!props.status)
    }
    return (
      <div className={classes.sideMenu}>
        <IconButton onClick={setStatus}>
          <box-icon type="solid" name="chevron-left" color="white"></box-icon>
        </IconButton>
        <p className={classes.menuContainer} onClick={() => logout()}>
          Log Out
        </p>
        {userData && <p className={classes.userText}>{userData.email}</p>}
      </div>
    );
}
