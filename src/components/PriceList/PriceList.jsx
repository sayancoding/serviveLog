import React,{useState} from 'react'
import {makeStyles,TextField,Fab,Dialog,DialogTitle,DialogContent} from '@material-ui/core'
import 'boxicons';
import CreateForm from './CreateForm/CreateForm'
import {Products} from '../../dummyData'
import TableData from './TableData/TableData';

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
    const [open,setOpen] = useState(false);
    function dialogOpenHandler(){
      console.log(Products)
      setOpen(true)
    }
    function dialogCloseHandler(){
      setOpen(false)
    }

    return (
      <div className={classes.container}>
        <p className={classes.headText}>Price CheatSheet</p>
        <TextField
          className={classes.textField}
          type="search"
          label="Search item"
          variant="outlined"
        />
        <div style={{marginTop:"12px"}}>
          <TableData/>
        </div>

        <Dialog open={open} keepMounted onClose={dialogCloseHandler}>
          <DialogTitle>Create Product</DialogTitle>
          <hr/>
          <DialogContent>
            <CreateForm />
          </DialogContent>
        </Dialog>
        <Fab
          color="primary"
          className={classes.floatBtn}
          onClick={dialogOpenHandler}
        >
          <box-icon name="message-square-add" color="white"></box-icon>
        </Fab>
      </div>
    );
}
export default PriceList;