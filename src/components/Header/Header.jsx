import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import "boxicons";

const useStyle = makeStyles({
  root: {
    backgroundColor: "#fff",
    boxShadow: "none",
    color: "black",
  },
});

export default function Header(props) {
  const classes = useStyle();
  function setStatus() {
    props.setStatus(!props.status);
  }
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container>
            <Grid item>
              <IconButton onClick={setStatus}>
                <box-icon name="menu-alt-left" color="black"></box-icon>
              </IconButton>
            </Grid>
            <Grid item sm xs></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={2} color="secondary">
                  <box-icon
                    name="message-square-detail"
                    color="black"
                  ></box-icon>
                </Badge>
              </IconButton>
              <IconButton>
                <box-icon name="meh"></box-icon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
