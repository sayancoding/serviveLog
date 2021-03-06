import React, { useState, useEffect, useContext} from "react";
import 'boxicons';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  makeStyles,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from "@material-ui/core";
import { TableHeadData } from "../../../dummyData";
import ProductView from "./ProductView/ProductView";
import {PriceContext} from '../PriceContext';
import CreateForm from "../CreateForm/CreateForm";

const useStyle = makeStyles((theme) => ({
  table: {
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.main,
    },
    "& tbody tr:hover": {
      backgroundColor: "#ffff",
      cursor: "pointer",
      color: theme.palette.success.main,
    },
    "& tbody tr:hover td": {
      color: theme.palette.warning.light,
    },
  },
}));

export default function TableData(props) {
  const classes = useStyle();
  const pages = [5, 10, 20];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [prices, setPrices] = useContext(PriceContext);
  const [Items, setItems] = useState([]);
  const [productDialog, setProductDialog] = useState(false);
  const [currProduct, setCurrProduct] = useState({});
  const [open,setOpen] = useState(false)
  
  useEffect(() => {
    setItems(props.tableData);
  }, [props.tableData]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const afterPagenationAndSorting = () => {
    return Items.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };
  const viewProduct = (productDetail) => {
    setProductDialog(true);
    setCurrProduct(productDetail);
  };
  const deleteProduct = (product)=>{
    setItems(Items.filter((el)=>el.id !== product.id))
    setProductDialog(false)
  }
  const updateProduct = () =>{
    setProductDialog(false)
    setOpen(true)
  }
  function dialogCloseHandler(){
    setOpen(false)
  }
  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {TableHeadData.map((head) => (
              <TableCell key={head.id}>{head.lable}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {prices.length && (<TableBody>
            {afterPagenationAndSorting().map((item) => (
              <TableRow key={item.id} onClick={() => viewProduct(item)}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.costPrice}</TableCell>
                <TableCell>{item.sellingPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>)}
        <TablePagination
          page={page}
          rowsPerPageOptions={pages}
          rowsPerPage={rowsPerPage}
          count={Items.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Table>
      <Dialog
        open={productDialog}
        keepMounted
        onClose={() => setProductDialog(false)}
      >
        <DialogTitle style={{ fontWeight: "bold" }}>
          {currProduct.productName}
        </DialogTitle>
        <DialogContent>
          <ProductView productDetail={currProduct} />
        </DialogContent>
        <DialogActions>
          <IconButton onClick={() => deleteProduct(currProduct)}>
            <box-icon name="trash-alt" color="#bd2000"></box-icon>
          </IconButton>
          <IconButton onClick={() => updateProduct(currProduct)}>
            <box-icon name="edit" color="green"></box-icon>
          </IconButton>
        </DialogActions>
      </Dialog>
      <Dialog open={open} keepMounted onClose={dialogCloseHandler}>
        <DialogTitle>Edit Product</DialogTitle>
        <hr />
        <DialogContent>
          <CreateForm
            dialogCloseHandler={dialogCloseHandler}
            formData={currProduct}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
