import React from "react";
import AppSidebar from "./SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "min-content 1fr",
          height: "100%",
        }}
      >
        <AppSidebar></AppSidebar>
        <div>{children}</div>
      </div>
    </>
  );
}
