import { Box, Card } from "@mui/material";
import "./App.css";
import { UserSignup } from "./components/UserSignup";
import { DistributionTable } from "./components/DistributionTable";

function App() {
  return (
    <>
      <Box sx={{display: "flex", justifyContent: "center"}}>
      <Card sx={{padding: "20px", width: "80%", border: "1px solid gray"}}>
        <UserSignup />
        <DistributionTable/>
      </Card>
      </Box>
    </>
  );
}

export default App;
