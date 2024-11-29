import { commonTheme } from "./commonTheme";
import { commonComponents } from "./commonComponents";

export const lightTheme = {
  // palette: {
  //   mode: 'light',
  //   primary: {
  //     main: '#1976d2',
  //   },
  //   background: {
  //     default: '#ffffff',
  //     paper: '#f5f5f5',
  //   },
  //   text: {
  //     primary: '#000000', // 기본 텍스트 색상
  //     secondary: '#555555',
  //   },
  // },
  palette: {
    mode: "light",
    primary: {
      main: "#ff8a80", // 파스텔 붉은색 (더 부드럽고 밝은 톤)
      light: "#ffb3b3", // 밝은 파스텔 붉은 톤
      dark: "#d32f2f", // 약간 강한 붉은색 (어두운 톤)
      contrastText: "#ffffff", // 텍스트 색상
    },
    secondary: {
      main: "#ffb74d", // 부드러운 주황 계열
      light: "#ffd95b",
      dark: "#e65100",
      contrastText: "#212121",
    },
    error: {
      main: "#f44336", // 오류 색상
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#29b6f6",
    },
    success: {
      main: "#66bb6a",
    },
    background: {
      default: "#f5f5f5", // 밝은 배경
      paper: "#ffffff", // 카드, 패널 배경
    },
    text: {
      primary: "#212121", // 기본 텍스트
      secondary: "#757575", // 보조 텍스트
    },
    divider: "rgba(0, 0, 0, 0.12)", // 구분선
  },
  ...commonTheme,
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: '#000000', // 기본 텍스트 색상 (Light 모드)
    },
  },
  components: {
    ...commonComponents,
  }
};
