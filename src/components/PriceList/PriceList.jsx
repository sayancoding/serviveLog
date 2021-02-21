import React from 'react'
import {makeStyles,TextField,Fab} from '@material-ui/core'
import 'boxicons';
import CreateForm from './CreateForm/CreateForm'

const useStyle = makeStyles({
  container: {
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "center",
  },
  headText: {
    fontSize: "1.2rem",
  },
  textField: {
    width: "320px",
    height: "50px",
  },
  floatBtn: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    background: "#5A20CB",
  },
});

function PriceList() {
    const classes = useStyle();
    return (
      <div className={classes.container}>
        <p className={classes.headText}>Price CheatSheet</p>
        <TextField
          className={classes.textField}
          type="search"
          label="Search item"
          variant="outlined"
        />
        <CreateForm/>
        <Fab color="primary" className={classes.floatBtn}>
          <box-icon name="message-square-add" color="white"></box-icon>
        </Fab>
      </div>
    );
}
export default PriceList;