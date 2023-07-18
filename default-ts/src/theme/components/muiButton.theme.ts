import { ThemeOptions } from "@mui/material";

export const muiButtonTheme: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
};