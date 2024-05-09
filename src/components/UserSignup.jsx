import { useState } from "react";
import { CreateUser } from "../functions/user";
import { Box, Button, TextField, Typography } from "@mui/material";
import { EarningsDistribution } from "./EarningsDistribution";

export const UserSignup = () => {
  const [user, setUser] = useState({
    name:'',
    parentId:''
  });
  const [errorMessage, setErrorMessage] = useState("");


  const handleOnChange=(e)=>{
    const {name, value} = e.target
    setUser({...user, [name]:value})
  }
  const handleSubmit = () => {
    console.log("Hello")
    setErrorMessage("");
    CreateUser(user.name, user.parentId);
   
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
            id="outlined-basic"
            label="Name."
            variant="outlined"
            name='name'
            value={user.name}
            onChange={handleOnChange}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Parent ID (optional)"
            variant="outlined"
            name='parentId'
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
        <EarningsDistribution />
      </Box>
      {/* <div className="user-signup-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Parent ID (optional):
          <input
            type="text"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
          />
        </label>
        <button type="submit">Create User</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div> */}
    </Box>
  );
};
