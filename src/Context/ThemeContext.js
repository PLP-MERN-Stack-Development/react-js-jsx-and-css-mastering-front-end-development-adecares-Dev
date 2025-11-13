// Compatibility re-exports: no JSX here to avoid Vite fast-refresh/parse issues.
export { default as ThemeContext } from "./ThemeContextCore";
export { ThemeProvider } from "./ThemeContext.jsx";
export { useTheme } from "./useTheme";
