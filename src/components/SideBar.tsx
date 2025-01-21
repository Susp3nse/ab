import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  MenuItemStyles,
  menuClasses,
} from "react-pro-sidebar";
import { NavLink } from "react-router";
import { routes } from "../utils/routes";
import styled from "@emotion/styled";
import { Typography } from "../utils/Typography";

export default function AppSidebar() {
  const [collapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [, setBroken] = React.useState(false);
  const [rtl] = React.useState(false);
  const [hasImage] = React.useState(false);
  const [theme] = React.useState<Theme>("dark");

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
              themes[theme].menu.menuContent,
              hasImage && !collapsed ? 0.4 : 1
            )
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          direction: rtl ? "rtl" : "ltr",
        }}
      >
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          onBackdropClick={() => setToggled(false)}
          onBreakPoint={setBroken}
          image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
          rtl={rtl}
          breakPoint="md"
          backgroundColor={hexToRgba(
            themes[theme].sidebar.backgroundColor,
            hasImage ? 0.9 : 1
          )}
          rootStyles={{
            color: themes[theme].sidebar.color,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <SidebarHeader
              rtl={rtl}
              style={{ marginBottom: "24px", marginTop: "16px" }}
            />
            <div style={{ flex: 1, marginBottom: "32px" }}>
              <div style={{ padding: "0 24px", marginBottom: "8px" }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  style={{
                    opacity: collapsed ? 0 : 0.7,
                    letterSpacing: "0.5px",
                  }}
                >
                  General
                </Typography>
              </div>
              <Menu menuItemStyles={menuItemStyles}>
                {routes.map((route) => {
                  return (
                    <MenuItem
                      key={route.path}
                      component={<NavLink to={route.path} />}
                    >
                      {route.label}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}

type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
}

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 45px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ ...rest }) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLogo>AB</StyledLogo>
        <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
          Account Builder
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
