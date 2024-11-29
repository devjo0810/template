import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { createTheme } from "@mui/material/styles";

export const createAppTheme = (theme) =>
  createTheme(theme === "light" ? lightTheme : darkTheme);