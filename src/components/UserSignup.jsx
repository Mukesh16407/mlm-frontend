import { useState } from "react";
import { CreateUser, getAllUsers } from "../functions/user";
import { Box, Button, TextField, Typography } from "@mui/material";
import { EarningsDistributionForm } from "./EarningsDistribution";
import PropTypes from "prop-types";

export const UserSignup = ({ setEarningDistribute, user, setUser }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    setErrorMessage("");
    try {
      await CreateUser(user.name, user.parentId);
      await getAllUsers();
      setUser({ name: "", parentId: null });
    } catch (error) {
      setErrorMessage("Failed to create user. Please try again.");
      console.error("Error creating user:", error);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "450px",
            padding: "20px",
            border: "0.5px solid #ede2e2",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>User</Typography>
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            name="name"
            value={user.name}
            onChange={handleOnChange}
          />
          <TextField
            fullWidth
            id="parentId"
            label="Parent ID (optional)"
            variant="outlined"
            name="parentId"
            value={user.parentId}
            onChange={handleOnChange}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleSubmit}
              sx={{ width: "200px", background: "black" }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Box>
        <EarningsDistributionForm setEarningDistribute={setEarningDistribute} />
      </Box>
    </Box>
  );
};

UserSignup.propTypes = {
  setEarningDistribute: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};
