import { Box, Button, TextField, Typography } from "@mui/material";

export const EarningsDistribution = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: "24px", width: "450px", padding: "20px", border: "0.5px solid #ede2e2"}}>
    <Typography sx={{fontSize: "1.2rem"}}>Distribution</Typography>
    <TextField fullWidth id="outlined-basic" label="UserId." variant="outlined" />
    <TextField fullWidth id="outlined-basic" label="Amount." variant="outlined"  type="number" />
    <Box sx={{display: "flex", justifyContent: "center"}}>
    <Button sx={{width: "200px", background: "black"}} variant="contained">Submit</Button>
    </Box>
  </Box>
  )
};
