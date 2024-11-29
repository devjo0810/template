import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}

      {/* 헤더 */}
      <Header />

      {/* 사이드바 */}
      <Sidebar />

      {/* 메인 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginTop: "64px",
          marginLeft: "64px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
