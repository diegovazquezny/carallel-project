import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import Box from "@mui/material/Box";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const auth_token = cookieStore.get("auth_token");
  if (!auth_token) {
    redirect("/login");
  }
  return (
    <section>
      <Header />
      <Box mt={8}>{children}</Box>
      <Footer />
    </section>
  );
}
