import { GlobalStyles } from "@mui/material";

const GlobalStyle = () => (
  <GlobalStyles
    styles={{
      a: {
        color: "inherit", // 텍스트 색상 상속
        textDecoration: "none", // 밑줄 제거
        "&:hover": {
          textDecoration: "underline",
        },
        "&:visited": {
          color: "inherit", // 클릭 후 색상 유지
        },
      },
    }}
  />
);

export default GlobalStyle;
