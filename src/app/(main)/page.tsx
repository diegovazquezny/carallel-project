import LibraryMenu from "@/components/shared/library_menu";
import React from "react";
import Recommended from "@/components/shared/recommended";
import Topics from "@/components/shared/topics";
import AdditionalResources from "@/components/shared/additional_resources";
import Box from "@mui/material/Box";

export default function HomePage() {
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LibraryMenu />
      <Recommended />
      <Topics />
      <AdditionalResources />
    </Box>
  );
}
