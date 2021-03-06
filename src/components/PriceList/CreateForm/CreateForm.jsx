import React,{useState,useContext} from "react";
import {
  Grid,
  TextField,
  Select,
  makeStyles,
  FormControl,
  InputLabel,
  Button
} from "@material-ui/core";
import {PriceContext} from '../PriceContext'

const useStyle = makeStyles({
  container: {
    padding: "12px",
  },
  inputField: {
    margin: "4px",
    width: "98%",
  },
});

let formData = {
  productName: "",
  costPrice: "",
  sellingPrice: "",
  description: "",
  category: "",
  quantity: "",
};


export default function CreateForm(props) {
    const classes = useStyle();
    const [data,setData] = useState(formData);
    const [prices,setPrices] = useContext(PriceContext) 

    const eventHandler = e =>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    const submitForm = () =>{
        console.log(prices)
        setPrices([...prices,{id:prices.length,...data}])
        props.dialogCloseHandler();
    }

    return (
      <div style={{ marginTop: "12px" }}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                label="Item Name"
                name="productName"
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
                onChange={eventHandler}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                className={classes.inputField}
                variant="outlined"
                label="Selling Price"
                name="sellingPrice"
                onChange={eventHandler}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                className={classes.inputField}
                variant="outlined"
                label="Description"
                name="descriptions"
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
                  onChange={eventHandler}
                >
                  <option style={{ margin: "6px" }} value="0">
                    Un-Categorized
                  </option>
                  <option style={{ margin: "6px" }} value="1">
                    option - 1
                  </option>
                  <option style={{ margin: "6px" }} value="2">
                    option - 2
                  </option>
                  <option style={{ margin: "6px" }} value="3">
                    option - 3
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
