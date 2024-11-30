import useLayoutStore from "@/store/layout";
import { Brightness4, Brightness7, Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Button, ButtonGroup, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Header = () => {

  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { toggleTheme, toggleDrawer } = useLayoutStore();

  // 언어 변경 함수
  const handleLanguageSwitch = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>

        {/* 언어 전환 버튼 */}
        <ButtonGroup
          variant="outlined"
          aria-label="language switch"
          size="small"
          sx={{
            marginRight: "10px",
          }}
        >
          <Button
            onClick={() => handleLanguageSwitch("ko")}
            color={i18n.language === "ko" ? "primary" : "default"}
            sx={{
              fontSize: "0.8rem",
              "&:hover": {
                bgcolor: theme.palette.mode === "light" && "rgba(255, 255, 255, 0.5)",
              },
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
              "&:hover": {
                bgcolor: theme.palette.mode === "light" && "rgba(255, 255, 255, 0.5)",
              },
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

        {/* 테마 변경 버튼 */}
        <Tooltip title={`Switch to ${theme.palette.mode === "light" ? "dark" : "light"} mode`}>
          <IconButton
            size="small"
            onClick={toggleTheme}
            sx={{
              color: theme.palette.mode === "light" ? "#ffb74d" : "#80d8ff",
              bgcolor: theme.palette.mode === "light" && "rgba(255, 255, 255, 0.8)",
              borderRadius: "8px", // 사각형에 살짝 둥근 모서리
              // padding: "8px 16px", // 버튼 크기 조정
              "&:hover": {
                bgcolor: theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.9)" : "#00695c",
                color: theme.palette.mode === "light" ? "#f57c00" : "#a7ffeb",
              },
            }}
          >
            {theme.palette.mode === "light" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Tooltip>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
