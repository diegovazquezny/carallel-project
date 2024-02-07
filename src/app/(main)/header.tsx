"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { usePathname } from "next/navigation";

const formatPathname = (pathname: string): string => {
  pathname = pathname.slice(0, pathname.lastIndexOf("/"));
  return pathname;
};

function Header() {
  const pathname = usePathname();
  const formattedPathname = formatPathname(pathname);
  const paths: Record<string, string> = {
    "/article": "Article",
    "/": "Library",
  };

  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <SettingsIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              fontFamily: "sans-sarif",
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {paths[formattedPathname] ?? "Library"}
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <NotificationsNoneIcon sx={{ display: { xs: "flex" }, mr: 1 }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
