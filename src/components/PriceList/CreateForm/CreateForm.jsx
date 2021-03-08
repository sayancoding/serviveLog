import React, { useState, useContext ,useEffect} from "react";
import {
  Grid,
  TextField,
  Select,
  makeStyles,
  FormControl,
  InputLabel,
  Button,
} from "@material-ui/core";
import { PriceContext } from "../PriceContext";

const useStyle = makeStyles({
  container: {
    padding: "12px",
  },
  inputField: {
    margin: "4px",
    width: "98%",
  },
});


export default function CreateForm(props) {
  const classes = useStyle();
  const [data, setData] = useState(props.formData);
  const [prices, setPrices] = useContext(PriceContext);
  
  useEffect(() => {
    setData(props.formData);
  }, [props.formData]);

  const eventHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = () => {
    let idx = -1;
    for(let i=0; i <prices.length; i++){
      if(prices[i].id === data.id){
        idx = i;
        break;
      }
    }
    if(idx >=0){
      prices[idx] = data;

    }else{
      setPrices([...prices, { id: prices.length, ...data }]);
    }
    props.dialogCloseHandler();
  };

  return (
    <div style={{ marginTop: "12px" }}>
      <div className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              label="Item Name"
              name="productName"
              value={data.productName ||''}
              className={classes.inputField}
              onChange={eventHandler}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Cost Price"
              name="costPrice"
              value={data.costPrice || ''}
              onChange={eventHandler}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Selling Price"
              name="sellingPrice"
              value={data.sellingPrice || ''}
              onChange={eventHandler}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Description"
              name="descriptions"
              value={data.descriptions || ''}
              onChange={eventHandler}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.inputField}>
              <InputLabel
                style={{ marginLeft: "12px", marginTop: "-6px" }}
                htmlFor="category-outline"
              >
                Category
              </InputLabel>
              <Select
                native
                variant="outlined"
                label="Category"
                inputProps={{ id: "category-outline" }}
                name="category"
                value={data.category || 'NaN'}
                onChange={eventHandler}
              >
                <option style={{ margin: "6px" }} value="NaN">
                  Un-Categorized
                </option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Quantity"
              name="quantity"
              value={data.quantity ||''}
              onChange={eventHandler}
            />
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "20px" }}>
          <Grid item sm={1} xs>
            <Button color="primary" onClick={submitForm}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
