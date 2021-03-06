import React, { useState,useContext,useEffect } from "react";
import {
  makeStyles,
  TextField,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import "boxicons";
import CreateForm from "./CreateForm/CreateForm";
import { Products } from "../../dummyData";
import TableData from "./TableData/TableData";
import {PriceContext} from './PriceContext'

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
  const [open, setOpen] = useState(false);
  const [prices] = useContext(PriceContext);
  const [Items, setItems] = useState(prices);
  useEffect(() => {
    setItems(prices)
  }, [prices])

  function dialogOpenHandler() {
    console.log(Products);
    setOpen(true);
  }
  function dialogCloseHandler() {
    setOpen(false);
  }
  const searchFilter = (event) => {
    setItems(
      prices.filter((el) => {
        if (event.target.value === "") {
          return [...prices];
        } else {
          return el.productName
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        }
      })
    );
  };
  return (
    <div className={classes.container}>
      <p className={classes.headText}>Price CheatSheet</p>
      <TextField
        className={classes.textField}
        type="search"
        label="Search item"
        variant="outlined"
        onChange={searchFilter}
      />
      <div style={{ marginTop: "12px" }}>
        <TableData tableData={Items} />
      </div>

      <Dialog open={open} keepMounted onClose={dialogCloseHandler}>
        <DialogTitle>Create Product</DialogTitle>
        <hr />
        <DialogContent>
          <CreateForm dialogCloseHandler={dialogCloseHandler} />
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
