import React from "react";
import {
  Paper,
  Grid,
  TextField,
  Select,
  makeStyles,
  FormControl,
  InputLabel,
  Button
} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    padding: "12px",
  },
  inputField: {
    margin: "4px",
    width: "98%",
  },
});

export default function CreateForm() {
  const classes = useStyle();
  return (
    <div style={{ marginTop: "12px" }}>
      <Paper className={classes.container}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              label="Item Name"
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="MRP"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Customer Price"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              className={classes.inputField}
              variant="outlined"
              label="Description"
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
              >
                <option style={{ margin: "6px" }} value="0">
                  Un-Categorized
                </option>
                <option style={{ margin: "6px" }} value="0">
                  option - 1
                </option>
                <option style={{ margin: "6px" }} value="0">
                  option - 2
                </option>
                <option style={{ margin: "6px" }} value="0">
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
            />
          </Grid>
        </Grid>
        <Grid container style={{marginTop:"20px"}}>
          <Grid item>
              <Button color="primary">Submit</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
