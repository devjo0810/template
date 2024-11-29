import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createAppTheme } from "./assets/theme"; // theme.js에서 getTheme 불러오기
import AdminLayout from "./layouts/AdminLayout/index";
import useLayoutStore from "./store/layout";
export default function App() {
  const { themeMode } = useLayoutStore();

  const theme = createAppTheme(themeMode);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AdminLayout>
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
            {/* 다른 라우트 추가 */}
          </Routes>
        </AdminLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
