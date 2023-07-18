import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/theme/theme"; 

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
          themes: {
              testTheme: theme,
            },
            defaultTheme: "testTheme",
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
          }),
        ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
