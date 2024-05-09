import { Box, Card } from "@mui/material";
import "./App.css";
import { UserSignup } from "./components/UserSignup";
import { DistributionTable } from "./components/DistributionTable";
import { useState } from "react";

function App() {
  const [earningDistribute, setEarningDistribute] = useState({});
  const [user, setUser] = useState({
    name: "",
    parentId: null,
  });
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Card sx={{ padding: "20px", width: "80%", border: "1px solid gray" }}>
          <UserSignup
            setEarningDistribute={setEarningDistribute}
            user={user}
            setUser={setUser}
          />
          <DistributionTable
            user={user}
            earningDistribute={earningDistribute}
          />
        </Card>
      </Box>
    </>
  );
}

export default App;
