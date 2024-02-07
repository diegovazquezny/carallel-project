"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BuildIcon from "@mui/icons-material/Build";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import s from "./footer.module.css";

interface Props {
  hide?: boolean;
}

export default function Footer({ hide }: Props) {
  const [value, setValue] = React.useState(0);
  if (hide) return null;
  return (
    <Box
      className={s.Footer}
      maxWidth={552}
      sx={{ width: "100%", position: "fixed", bottom: 0 }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          href="/"
          sx={{ minWidth: "10%" }}
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          sx={{ minWidth: "10%" }}
          label="Library"
          icon={<LibraryBooksIcon />}
        />
        <BottomNavigationAction
          sx={{ minWidth: "10%" }}
          label="Plan"
          icon={<CheckCircleOutlineIcon />}
        />
        <BottomNavigationAction
          sx={{ minWidth: "10%" }}
          label="Tools"
          icon={<BuildIcon />}
        />
        <BottomNavigationAction
          sx={{ minWidth: "10%" }}
          label="Support"
          icon={<SupportAgentIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
