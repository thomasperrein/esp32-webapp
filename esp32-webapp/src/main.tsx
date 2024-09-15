import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";

const colorPaletteBluePale: MantineColorsTuple = [
  "#eef3ff",
  "#dce4f5",
  "#b9c7e2",
  "#94a8d0",
  "#748dc1",
  "#5f7cb8",
  "#5474b4",
  "#44639f",
  "#39588f",
  "#2d4b81",
];

const theme = createTheme({
  colors: {
    blue: colorPaletteBluePale,
  },
  headings: {
    fontWeight: "400",
    sizes: {
      h1: { fontSize: rem(36), lineHeight: rem(1.1) },
    },
  },
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  lineHeights: {
    base: "1.5",
  },
  fontSmoothing: true,
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
