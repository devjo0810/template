import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const SidebarUserInfo = ({ user, isDrawerOpen }) => {
  return (
    <Box
      sx={{
        mt: "auto", // 사이드바 하단에 고정
        py: 2,
        px: isDrawerOpen ? 2 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: isDrawerOpen ? "flex-start" : "center",
        borderTop: "1px solid #ddd", // 구분선
      }}
    >
      {/* 프로필 아이콘: 사용자의 이름 이니셜을 표시 */}
      <Avatar
        sx={{
          width: 36,
          height: 36,
          mr: isDrawerOpen ? 2 : 0,
        }}
      >
        {user.name.charAt(0)} {/* 이름의 첫 글자 */}
      </Avatar>

      {isDrawerOpen && (
        <Box>
          <Typography variant="body1">{user.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {user.email}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SidebarUserInfo;
