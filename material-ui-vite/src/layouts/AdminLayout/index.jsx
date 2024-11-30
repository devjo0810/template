import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useTheme } from "@mui/material/styles";
import { CommonProvider } from "@/context/CommonProvider";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <CommonProvider>
      <Box sx={{ display: "flex" }}>

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
          marginTop: `${theme.layout.headerHeight}px`,
        }}
      >
        {children}
        </Box>
      </Box>
    </CommonProvider>
  );
};

export default Layout;
