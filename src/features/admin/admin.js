import { Box } from "@mui/system";
import React from "react";
import Sidebar from "./component/sidebar/sidebar";

const Dashboard = () => {
  return (
    <Box paddingTop="80px" minHeight="100vh">
      <Sidebar />
    </Box>
  );
};

export default Dashboard;
