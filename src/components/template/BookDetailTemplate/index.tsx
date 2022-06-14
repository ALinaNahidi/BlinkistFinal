import { Theme } from "@emotion/react";
import { Box, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    border: "none",
    textDecoration: "none",
    background: "contain",
  },
  paper: {},
  container: {},
  sideNav: {},
  banner: { flexGrow: 1 },
  content: {},
  rightPanel: {},
}));

interface BookDetailTemplateProps {
  bookDetailComponent: JSX.Element;
}

const BookDetailTemplate = (props: BookDetailTemplateProps) => {
  const style = useStyles();

  return (
    <Box className={style.root}>
      <Paper className={style.paper}>
        <Grid container className={style.container} spacing={2}>
          <Grid item xs={2} className={style.sideNav}></Grid>
          <Grid item container xs alignContent="flex-start" spacing={2}>
            <Grid item className={style.banner}>
              {props.bookDetailComponent}
            </Grid>
          </Grid>
          <Grid item xs={2} className={style.rightPanel}></Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default BookDetailTemplate;
