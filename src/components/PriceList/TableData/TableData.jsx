import React,{useState,useEffect} from 'react'
import {Table,TableBody,TableCell,TableRow,TableHead,makeStyles,TablePagination} from '@material-ui/core'
import {Products,TableHeadData} from '../../../dummyData'

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
              <TableRow key={item.id}>
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
      </>
    );
}
