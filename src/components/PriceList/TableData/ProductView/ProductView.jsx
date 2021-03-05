import React from 'react'
import {Grid,makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    item:{
        marginBottom:"10px"
    }
})

const ProductView = (props)=> {
    const classes = useStyle();
    return (
      <>
        <Grid container>
          <Grid item sm={6} xs={6} className={classes.item}>
            Cost Price :{" "}
            <span style={{ color: "green" }}>
              ₹{props.productDetail.costPrice}
            </span>
          </Grid>
          <Grid item sm={6} xs={6} className={classes.item}>
            Selling Price :{" "}
            <span style={{ color: "red" }}>
              ₹{props.productDetail.sellingPrice}
            </span>
          </Grid>
          <Grid item sm={6} xs={6} className={classes.item}>
            Category : {props.productDetail.category}
          </Grid>
          <Grid item sm={6} xs={6} className={classes.item}>
            Quantity : {props.productDetail.quantity}
          </Grid>
          <Grid item sm={12} className={classes.item}>
            Descriptions : {props.productDetail.descriptions}
          </Grid>
        </Grid>
      </>
    );
}
export default ProductView