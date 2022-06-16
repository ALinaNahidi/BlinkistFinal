import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../Images/logo.png";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import TypographyComponent from "../../atoms/Typography";
import NavItems from "../../molecules/NavItems";
import ExploreDropDown from "../ExploreDropDown";
import { Backdrop, CssBaseline } from "@mui/material";

type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
};
interface NavBarProp {
  bookObject: Array<Book>;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  logo: {
    width: "124.09px",
    height: "26px",
  },

  AppBar: {
    padding: "0px !important ",
    border: "none",
    position: "static",
  },

  ToolBar: {
    padding: "0px !important",
  },
}));

const pages = [
  <SearchIcon />,
  // <ExploreDropDown  />,
  // <TypographyComponent variant="body1" children="My Library" />,
];

const NavBar = (props: NavBarProp) => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);

  const [anchorElUser, setAnchorElUser] =
    React.useState<null | HTMLElement>(null);

  const [backDrop, setBackDrop] = React.useState(true);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleBackDrop = (iconVariable: boolean) => {
    setBackDrop(iconVariable);
    console.log(backDrop);
  };

  return (
    <React.Fragment>
      <Backdrop open={!backDrop} sx={{ zIndex: "1000" }} />

      <AppBar className={classes.AppBar} elevation={0}>
        <CssBaseline />
        <Container maxWidth="xl">
          <CssBaseline />
          <Toolbar disableGutters className={classes.ToolBar}>
            <CssBaseline />
            <Box
              component="img"
              src={logo}
              sx={{ display: "flex" , mr: 1, ml:1 }}
              className={classes.logo}
            ></Box>

            <Box
              sx={{
                flexGrow: 1,
                display:"flex",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#03314B",
                  display: "block",
                  fontSize: "16px",
                }}
              >
                <SearchIcon />
              </Button>
              <Button
                disableRipple={true}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#03314B",
                  display: "block",
                  fontSize: "16px",
                }}
              >
                <ExploreDropDown
                  onExplore={handleBackDrop}
                  bookObject={props.bookObject}
                />
              </Button>
              <Button
                disableRipple={true}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#03314B",
                  display: "block",
                  fontSize: "16px",
                }}
              >
                <TypographyComponent variant="body1" children="My Library" />
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <NavItems
                  children={
                    <IconButton
                      disableRipple={true}
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  }
                />
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
