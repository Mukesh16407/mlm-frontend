import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { distributeEarnings } from "../functions/user";
import PropTypes from "prop-types";

export const EarningsDistributionForm = ({ setEarningDistribute }) => {
  const [formData, setFormData] = useState({
    userId: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const getResponse = await distributeEarnings(
        formData.userId,
        formData.amount
      );
      setEarningDistribute(getResponse);
      setFormData({ userId: "", amount: "" });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <Typography sx={{ fontSize: "1.2rem" }}>Distribution</Typography>
        <TextField
          fullWidth
          id="userId"
          name="userId"
          label="User ID"
          variant="outlined"
          value={formData.userId}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Amount"
          variant="outlined"
          type="number"
          value={formData.amount}
          onChange={handleInputChange}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            sx={{ width: "200px", background: "black" }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

EarningsDistributionForm.propTypes = {
  setEarningDistribute: PropTypes.func.isRequired,
};
