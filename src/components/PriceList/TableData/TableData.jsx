import React,{useState,useEffect} from 'react'
import {Table,TableBody,TableCell,TableRow,TableHead,makeStyles,TablePagination,Dialog,DialogTitle,DialogContent} from '@material-ui/core'
import {Products,TableHeadData} from '../../../dummyData'
import ProductView from "./ProductView/ProductView";

const useStyle = makeStyles(theme=>({
    table:{
        '& thead th':{
            fontWeight:'600',
            color:theme.palette.primary.main,
        },
        '& tbody tr:hover':{
            backgroundColor:"#ffff",
            cursor:"pointer",
            color:theme.palette.success.main
        },
        '& tbody tr:hover td':{
            color:theme.palette.warning.light
        }
    }
}))

export default function TableData(props) {
    const classes = useStyle();
    const pages = [5,10,20];
    const [page,setPage] = useState(0)
    const [rowsPerPage,setRowsPerPage] = useState(pages[page]);
    const [Items,setItems] = useState([...Products]);
    const [productDialog,setProductDialog] = useState(false);
    const [currProduct,setCurrProduct] = useState({})
    useEffect(() => {
      setItems(props.tableData);
    }, [props.tableData]);
    const handleChangePage = (event, newPage) =>{
        setPage(newPage)
    }
    const handleChangeRowsPerPage = (event) =>{
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0)
    }
    const afterPagenationAndSorting = () =>{
        return Items.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    }
    const viewProduct = (productDetail) =>{
      setProductDialog(true)
      setCurrProduct(productDetail);
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
          <TableBody>
            {afterPagenationAndSorting().map((item) => (
              <TableRow key={item.id} onClick={() => viewProduct(item)}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.costPrice}</TableCell>
                <TableCell>{item.sellingPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
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
          onClose={()=>setProductDialog(false)}
        >
          <DialogTitle style={{fontWeight:'bold'}}>{currProduct.productName}</DialogTitle>
          <DialogContent>
              <ProductView productDetail={currProduct}/>
          </DialogContent>
        </Dialog>
      </>
    );
}
