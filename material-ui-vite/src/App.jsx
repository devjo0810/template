import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createAppTheme } from "./assets/theme"; // theme.js에서 getTheme 불러오기
import GlobalStyle from "./assets/theme/GlobalStyle";
import AdminLayout from "./layouts/AdminLayout/index";
import useLayoutStore from "./store/layout";
import Dashboard from "./views/Dashboard";
export default function App() {
  const { themeMode } = useLayoutStore();

  const theme = createAppTheme(themeMode);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <AdminLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<h1>Settings</h1>} />
            {/* 다른 라우트 추가 */}
          </Routes>
        </AdminLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
