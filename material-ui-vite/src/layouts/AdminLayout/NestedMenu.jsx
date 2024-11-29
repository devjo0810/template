import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Tooltip, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import * as Icons from "@mui/icons-material";
import { Link } from "react-router-dom";

const NestedMenu = ({ menus, isDrawerOpen, level = 0 }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuLabel) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuLabel]: !prevState[menuLabel],
    }));
  };

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return menus.map((menu) => (
    <React.Fragment key={menu.label}>
      <Tooltip title={menu.label} placement="right" disableHoverListener={isDrawerOpen}>
        <ListItem
          button
          component={menu.link ? Link : "div"}
          to={menu.link || ""}
          onClick={() => menu.children && toggleMenu(menu.label)}
          sx={{
            pl: isDrawerOpen ? 2 + level * 2 : 2, // 열려있으면 중첩 레벨에 따라 패딩, 닫혀있으면 기본 패딩만
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 36, // 아이콘과 텍스트 사이 간격 조정
              mr: isDrawerOpen ? 1 : 0, // 메뉴 열림 상태에 따라 간격 조정
            }}
          >{renderIcon(menu.icon)}</ListItemIcon>
          {isDrawerOpen && <ListItemText primary={menu.label} />}
          {menu.children && isDrawerOpen && (openMenus[menu.label] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
      </Tooltip>
      {menu.children && (
        <Collapse in={openMenus[menu.label]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NestedMenu menus={menu.children} isDrawerOpen={isDrawerOpen} level={level + 1} />
          </List>
        </Collapse>
      )}
    </React.Fragment>
  ));
};

export default NestedMenu;
