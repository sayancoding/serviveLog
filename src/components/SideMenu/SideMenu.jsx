import React from 'react'
import {makeStyles} from "@material-ui/core"
import 'boxicons';
import {IconButton} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left:"0px",
    width:(props)=>props.width,
    height: "100%",
    backgroundColor: "#5A20CB",
  },
}));

export default function SideMenu(props) {
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
      </div>
    );
}
