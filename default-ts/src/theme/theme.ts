import { createTheme } from "@mui/material";
import {
  muiButtonTheme,
} from "./components";
import { paletteTheme } from "./general";

export const theme = createTheme(
  muiButtonTheme,
  paletteTheme,
);
