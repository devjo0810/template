import { commonTheme } from "./commonTheme";
import { commonComponents } from "./commonComponents";

export const darkTheme = {
  // palette: {
  //   mode: 'dark',
  //   primary: {
  //     main: '#90caf9',
  //   },
  //   background: {
  //     default: '#121212',
  //     paper: '#1d1d1d',
  //   },
  //   text: {
  //     primary: '#ffffff', // 기본 텍스트 색상
  //     secondary: '#aaaaaa',
  //   },
  // },
  palette: {
    mode: "dark",
    primary: {
      main: "#ff8a80", // 파스텔 붉은색 (밝고 부드러운 톤)
      light: "#ffb3b3", // 밝은 파스텔 붉은 톤
      dark: "#d32f2f", // 어두운 붉은색 (좀 더 강조되는 톤)
      contrastText: "#ffffff", // 텍스트 색상
    },
    secondary: {
      main: "#ffb74d", // 부드러운 주황 계열
      light: "#ffd95b",
      dark: "#f57c00",
      contrastText: "#212121",
    },
    error: {
      main: "#f44336", // 오류 색상
    },
    warning: {
      main: "#ffb74d",
    },
    info: {
      main: "#29b6f6",
    },
    success: {
      main: "#66bb6a",
    },
    background: {
      default: "#121212", // 어두운 배경
      paper: "#1e1e1e", // 카드, 패널 배경
    },
    text: {
      primary: "#ffffff", // 기본 텍스트
      secondary: "#bdbdbd", // 보조 텍스트
    },
    divider: "rgba(255, 255, 255, 0.12)", // 구분선
  },
  ...commonTheme,
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: '#ffffff', // 기본 텍스트 색상 (Dark 모드)
    },
  },
  components: {
    ...commonComponents,
  }
};
