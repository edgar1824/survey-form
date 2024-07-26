import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { type FC } from "react";
import { NavLink } from "react-router-dom";
import { iconColors, sidebarItems } from "../../data/sidebar";
import type { NavItem } from "../../types/router";
import { Burger } from "../icons/sidebar/Burger";

const pathsArr: NavItem[] = Object.values(sidebarItems);

export const Sidebar: FC = () => {
  return (
    <Box sx={{ width: 100 }} role="navigation">
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ width: "fit-content", justifyContent: "center" }}
          >
            <ListItemIcon sx={{ justifyContent: "center", py: 2 }}>
              <Burger />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        {pathsArr.map(({ path, title, Icon }) => (
          <ListItem key={path} disablePadding>
            <NavLink
              to={path}
              style={{
                width: "100%",
              }}
            >
              {({ isActive }) => (
                <ListItemButton
                  selected={isActive}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon sx={{ justifyContent: "center" }}>
                    {<Icon active={isActive} />}
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 12,
                    }}
                    sx={{
                      textAlign: "center",
                      color: isActive ? iconColors.active : iconColors.inactive,
                    }}
                  >
                    {title}
                  </ListItemText>
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
