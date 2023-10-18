import React from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { Box, Button } from "@mui/material";
import DashboardAppbar from "../dashboard/DashboardAppbar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(number, name, email, pincode) {
  return { number, name, email, pincode };
}

const rows = [
  createData("01", "Anny", "user@gmail.com", "Seller"),
  createData("02", "Davide", "Admin@gmail.com", "Admin"),
  createData("03", "Abubakar", "seller@gmail.com", "Seller"),
  createData("04", "Harish", "seller@gmail.com", "Seller"),
  createData("05", "Subham", "seller@gmail.com", "Seller"),
  createData("06", "Anny", "seller@gmail.com", "Seller"),
];

const Users = () => {
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
      <DashboardAppbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <DashboardSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ overflow: "auto" }}>
            <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
              <h1>Users</h1>

              <Paper>
                {/* add user in modal */}
                <Modal />
                {/* finish  */}
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>ROLE</TableCell>
                        <TableCell style={{ paddingLeft: "40px" }}>
                          ACTION
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.slice(pg * rpg, pg * rpg + rpg).map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td,&:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.number}
                          </TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.pincode}</TableCell>
                          <TableCell>
                            <Button size="small" onClick={() => navigate("/")}>
                              <ModeEditIcon />
                            </Button>
                            <Button
                              size="small"
                              color="error"
                              onClick={() => navigate("/")}
                            >
                              <DeleteIcon />
                            </Button>
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
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Users;
