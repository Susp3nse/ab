import { AppShell, Box, Burger, Divider, em, Flex, Group } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import SidebarHeader from "./Sidebar/SidebarHeader.js";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Sidebar/SideBar.module.css";
import { useEffect } from "react";
import { routes } from "@/routes.js";

export default function Layout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const isMobile = useMediaQuery(`(max-width: ${em(991)})`);
  useEffect(() => {
    if (!isMobile && mobileOpened) {
      toggleMobile();
    }
  }, [isMobile]);
  const links = routes.map((item) => (
    <>
      {item.path && (
        <NavLink
          className={({ isActive }) => (isActive ? classes.link : classes.link)}
          to={item.path}
          key={item.label}
        >
          <item.icon />
          <span style={{ fontSize: 20, paddingLeft: 8 }}>{item.label}</span>
        </NavLink>
      )}
    </>
  ));
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header hiddenFrom="md">
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="md"
            size="md"
          />
          <SidebarHeader />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" mt={mobileOpened || isMobile ? 0 : -60}>
        {!mobileOpened && !isMobile && (
          <>
            <Flex align="center">
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="md"
                size="md"
              />
              <Box visibleFrom="md">
                <SidebarHeader />
              </Box>
            </Flex>
            <Divider my="md" />
          </>
        )}
        {links}
      </AppShell.Navbar>
      <AppShell.Main style={{ height: "100vh", maxHeight: "100vh" }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
