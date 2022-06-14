import { Theme } from "@emotion/react";
import { Box, Container, Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import logo from "../../../Images/logo.png";
import TypographyComponent from "../../atoms/Typography";


const useStyles: any = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "16px",
    color: "#03314B",
  },

  links: {
    fontSize: "16px",
    color: "#6D787E",
    marginTop:"15px",
    padding:"0",
  },

  quote:{
    fontSize:"24px",
    color:"blue"
  }
}));


const Footer = () => {
const classes = useStyles();
  return (
    <React.Fragment>
      <Box py={{ xs: 0, sm: 7 }} bgcolor="#F1F6F4" color="#03314B">
        <Container sx={{ marginLeft: "16%" }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={5}>
              <Box
                sx={{ height: "24px", marginTop: "10px" }}
                component="img"
                src={logo}
                alt="logo"
              ></Box>
              <Box className={classes.quote}>
                <h4>
                  Big ideas in small packages
                  <br /> Start learnign now
                </h4>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box className={classes.title}>Editorial</Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Book Lists
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Waht is Nonfiction?
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  What to read next?
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Benefits of reading
                </TypographyComponent>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box className={classes.title}>Useful links</Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Pricing
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Blinkist business
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Gift cards
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Blinkist magaine
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Contact & help
                </TypographyComponent>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box className={classes.title}>Company</Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">About</TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Careers
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Partners
                </TypographyComponent>
              </Box>
              <Box className={classes.links}>
                <TypographyComponent variant="body1">
                  Code of Conduct
                </TypographyComponent>
              </Box>
            </Grid>
          </Grid>
          <Box
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            className={classes.links}
          >
            &reg; Blinkist 2021 sitemap | imprint | Terms of Service | Privicy
            Policies
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
