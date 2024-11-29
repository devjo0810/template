import useLayoutStore from "@/store/layout";
import { Box, Drawer, List } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import menuData from "./menuData"; // JSON 데이터 가져오기
import NestedMenu from "./NestedMenu";
import SidebarUserInfo from "./SidebarUserInfo";

const user = {
  name: "John Doe", // 사용자의 이름
  email: "john.doe@example.com", // 사용자의 이메일
};

const Sidebar = () => {
  const { isDrawerOpen } = useLayoutStore();
  const theme = useTheme();
  const { drawerWidth, collapsedWidth } = theme.layout;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isDrawerOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isDrawerOpen ? drawerWidth : collapsedWidth,
          // transition: "width 0.3s",
          overflowX: "hidden",
          paddingTop: `${theme.layout.headerHeight}px`,
        },
      }}
    >
      {/* <Toolbar>
        <IconButton onClick={toggleDrawer}>
          {isDrawerOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar> */}
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
        {/* 메뉴 */}
        <List>
          <NestedMenu menus={menuData} isDrawerOpen={isDrawerOpen} />
        </List>

        {/* 사용자 정보 */}
        <SidebarUserInfo isDrawerOpen={isDrawerOpen} user={user} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
