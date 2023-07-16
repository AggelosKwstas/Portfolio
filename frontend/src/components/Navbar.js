import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@material-ui/icons";
import Avatar from "../components/Avatar";
import "../css/Navbar.css";
import { Link, Element, scroller } from "react-scroll";

const drawerWidth = 240;
const navItems = ["Home", "Projects", "Resume", "Find me"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        Portfolio
      </Box>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem
            key={item}
            disablePadding
            style={{ color: "#0d47a1" }}
            onClick={() => handleClick(index)}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleClick = (title) => {
    if (title == 0) {
      let id = "home";
      scroller.scrollTo(id, {
        duration: 200,
        smooth: true,
      });
    } else if (title == 1) {
      let id = "projects";
      scroller.scrollTo(id, {
        duration: 200,
        smooth: true,
      });
    }
    else if(title == 2) {
      let id = "resume";
      scroller.scrollTo(id, {
        duration: 200,
        smooth: true,
      });
    }
    else if(title == 3) {
      let id = "find";
      scroller.scrollTo(id, {
        duration: 200,
        smooth: true,
      });
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginLeft: "auto", display: { sm: "none" } }}>
            <Avatar />
          </Box>
          <Typography
            variant="h6"
            component="div"
            className=""
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="800"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar />
              <Box sx={{ paddingLeft: "15px" }}>Aggelos Kostas</Box>
            </Box>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            {navItems.map((item, index) => (
              <Button
                id="hover"
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => handleClick(index)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}
