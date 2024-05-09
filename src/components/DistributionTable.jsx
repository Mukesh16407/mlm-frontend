import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getAllUsers } from "../functions/user";
import PropTypes from "prop-types";

export const DistributionTable = ({ user, earningDistribute }) => {
  console.log(earningDistribute, "earningDistribute");
  const [getUsers, setGetUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getAllUsers();
      setGetUsers(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <>
      <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">UserId</TableCell>
              <TableCell align="right">ParentId</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getUsers?.map((row) => (
              <TableRow
                key={row._id} // Corrected key property to use _id
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.level}</TableCell>
                <TableCell align="right">{row._id}</TableCell>
                <TableCell align="right">{row.parentId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Level</TableCell>
              <TableCell align="right">userId</TableCell>
              <TableCell align="right">amount Distribute</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {earningDistribute?.distributions?.map((row) => (
              <TableRow
                key={row.level}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.level}</TableCell>
                <TableCell align="right">{row.userId}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

DistributionTable.propTypes = {
  earningDistribute: PropTypes.object.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    parentId: PropTypes.string.isRequired,
    // Add more properties as needed
  }).isRequired,
};
