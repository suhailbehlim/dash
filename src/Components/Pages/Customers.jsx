import React from "react";
// import DashboardSidebar from "../dashboard/DashboardSidebar";
import {  Button } from "@mui/material";
// import DashboardAppbar from "../dashboard/DashboardAppbar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border:' 1px solid lightgrey',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '40ch',
        },
      },
    },
  }));
function createData(number, name, pincode, action) {
    return { number, name, pincode, action };
   }
     
   const rows = [
    createData("14YH74", "Anny", 3323, "Order"),
    createData("14YH74", "Davide", 2511, "Order"),
    createData("14YH74", "Abubakar", 3554, "Order"),
    createData("14YH74", "Harish", 24445, "Order"),
    createData("14YH74", "Subham", 1878, "Order"),
    createData("14YH74", "Anny", 3323, "Order"),
    createData("14YH74", "Davide", 2511, "Order"),
    createData("14YH74", "Abubakar", 3554, "Order"),
    createData("14YH74", "Harish", 24445, "Order"),
    createData("14YH74", "Subham", 1878, "Order"),
    createData("14YH74", "Anny", 3323, "Order"),
    createData("14YH74", "Davide", 2511, "Order"),
    createData("14YH74", "Abubakar", 3554, "Order"),
    createData("14YH74", "Harish", 24445, "Order"),
    createData("14YH74", "Subham", 1878, "Order")
   ];
     
const Customers = () => {
  const navigate = useNavigate();

    const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);
  
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }
    
  return (
    <>
          {/* <DashboardAppbar />
<Box height={30}/>
      <Box sx={{ display: "flex" }}>
        <DashboardSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         */}
        <h2 style={{color:"#1976d2"}}>Customers</h2>
        <Paper>
          
            
            <TableContainer component={Paper}>
              <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="search Customer no./Name"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                <Table sx={{ minWidth: 650 }} 
                    aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>CUSTOMER NO.</TableCell>
                            <TableCell >NAME
                            </TableCell>
                            <TableCell >PINCODE
                            </TableCell>
                            <TableCell>ACTION
                            </TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.number}
                                </TableCell>
                                <TableCell >{row.name}
                                </TableCell>
                                <TableCell >{row.pincode}
                                </TableCell>
                                <TableCell ><Button variant="outlined"onClick={() => navigate("/order")}  >{row.action}</Button>
                                </TableCell>
                              
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
      
        {/* </Box>
      </Box> */}
    </>
  );
};

export default Customers;
