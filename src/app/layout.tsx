import type { Metadata } from "next";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import s from "./layout.module.css";

export const metadata: Metadata = {
  title: "Carallel Project",
  description: "Front end interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={s.Body}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container maxWidth="sm" sx={{ width: "100%" }}>
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
