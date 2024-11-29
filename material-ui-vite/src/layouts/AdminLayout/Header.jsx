import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, ButtonGroup, Button, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import useLayoutStore from "@/store/layout";

const Header = () => {

  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { toggleTheme, toggleDrawer } = useLayoutStore();

  // 언어 변경 함수
  const handleLanguageSwitch = (language) => {
    i18n.changeLanguage(language);
  };

  // 모드 변경 함수
  const handleModeToggle = (mode) => {
    toggleTheme(mode);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: "64px", backgroundColor: "#fff", boxShadow: 3 }}>
      <Toolbar sx={{ padding: 0 }}>
        {/* 메뉴 버튼 */}
        <IconButton
          color="black"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* 애플리케이션 이름 */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
          My Application
        </Typography>

        {/* 언어 전환 버튼 */}
        <ButtonGroup variant="outlined" aria-label="language switch" size="small">
          <Button
            onClick={() => handleLanguageSwitch("ko")}
            color={i18n.language === "ko" ? "primary" : "default"}
            sx={{
              fontSize: "0.8rem",
              "&.Mui-disabled": {
                backgroundColor: "#e0e0e0", // 비활성화 상태에서 배경색을 회색으로 설정
                color: "#9e9e9e", // 텍스트 색상도 회색
              },
            }}
            disabled={i18n.language === "ko"} // 이미 선택된 언어는 비활성화
          >
            한국어
          </Button>
          <Button
            onClick={() => handleLanguageSwitch("en")}
            color={i18n.language === "en" ? "primary" : "default"}
            sx={{
              fontSize: "0.8rem",
              "&.Mui-disabled": {
                backgroundColor: "#e0e0e0", // 비활성화 상태에서 배경색을 회색으로 설정
                color: "#9e9e9e", // 텍스트 색상도 회색
              },
            }}
            disabled={i18n.language === "en"} // 이미 선택된 언어는 비활성화
          >
            English
          </Button>
        </ButtonGroup>

        {/* 라이트/다크 모드 버튼 */}
        <ButtonGroup variant="outlined" aria-label="theme switch" size="small">
          <Tooltip title="Light Mode" placement="bottom">
            <Button
              onClick={() => handleModeToggle("light")}
              color={theme.palette.mode === "light" ? "primary" : "black"}
              sx={{
                fontSize: "1.2rem",
                "&:hover": { backgroundColor: "transparent" },
                "&.Mui-disabled": {
                  color: "#9e9e9e", // 비활성화 상태에서 아이콘 색상도 회색으로 설정
                },
              }}
              disabled={theme.palette.mode === "light"} // 이미 선택된 모드는 비활성화
            >
              <Brightness7 />
            </Button>
          </Tooltip>

          <Tooltip title="Dark Mode" placement="bottom">
            <Button
              onClick={() => handleModeToggle("dark")}
              color={theme.palette.mode === "dark" ? "primary" : "default"}
              sx={{
                fontSize: "1.2rem",
                "&:hover": { backgroundColor: "transparent" },
                "&.Mui-disabled": {
                  color: "#9e9e9e", // 비활성화 상태에서 아이콘 색상도 회색으로 설정
                },
              }}
              disabled={theme.palette.mode === "dark"} // 이미 선택된 모드는 비활성화
            >
              <Brightness4 />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
