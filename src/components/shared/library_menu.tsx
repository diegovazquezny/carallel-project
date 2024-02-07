"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function LibraryMenu() {
  const menuOptions = ["All", "Shared", "Bookmarks", "Read"];
  const [selected, setSelected] = React.useState("All");

  const MenuButtons = () => {
    return menuOptions.map((option) => (
      <Button
        onClick={() => setSelected(option)}
        key={option}
        sx={{
          width: 64,
          fontSize: 10,
          borderRadius: "15px",
          color: selected === option ? "white" : "darkgreen",
          backgroundColor: selected === option ? "darkgreen" : "white",
        }}
        variant="contained"
      >
        {option}
      </Button>
    ));
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        mt={3}
      >
        {<MenuButtons />}
      </Box>
    </React.Fragment>
  );
}
