import React from "react";
import { Box, Tab } from "@mui/material";
import { Theme } from "@emotion/react";
import { makeStyles, withStyles } from "@mui/styles";
import TypographyComponent from "../../atoms/Typography";
import BookReadTime from "../../molecules/BookRead";
import ButtonComponent from "../../atoms/Button";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link } from "react-router-dom";

type Book = {
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

interface BookDetailComponentProps {
  book: Book;
  bookObject: Array<Book>;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  detail: {
    display: "flex",
    alignItems: "initial",
    justifyContent: "space-between",
    justifyItems: "center",
  },
  rightBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
    flexGrow: 0.1,
  },
  Buttons: {
    marginTop: "8%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    justifyItems: "center",
  },

  margins: {
    marginTop: "3%",
  },
  tab: {
    paddingLeft: "0px !important",
  },

  textTop: {
    marginLeft: "0 !important",
    margin: "10% 0% 5%",
  },
}));

const CustomTab = withStyles({
  selected: {
    color: "#03314B !important",
  },
})(Tab);

const BookDetailComponent = (props: BookDetailComponentProps) => {
  const { book } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Box className={classes.textTop}>
        <TypographyComponent
          children="Get the key ideas from"
          variant="subtitle"
        />
      </Box>
      <Box className={classes.detail}>
        <Box className={classes.rightBlock}>
          <Box className={classes.margins} color="secondary">
            <TypographyComponent children={book.title} variant="header" />
          </Box>
          <Box className={classes.margins} color="gray">
            <TypographyComponent
              children={
                book.country.toString() + " " + book.language.toString()
              }
              variant="h5"
            />
          </Box>
          <Box className={classes.margins} color="gray">
            {" "}
            <TypographyComponent children={book.author} variant="subtitle" />
          </Box>
          <Box className={classes.margins}>
            <BookReadTime />
          </Box>

          <Box className={classes.Buttons}>
            <ButtonComponent
              title="Read now"
              varient="outlined"
            ></ButtonComponent>

            <Link
              to="/"
              state={{
                book: props.book,
                tab: "2",
                bookObjectFromState: props.bookObject,
              }}
              key={props.book.link}
              style={{
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              <ButtonComponent
                title="Finished Reading"
                varient="contained"
              ></ButtonComponent>
            </Link>

            <TypographyComponent
              children="Send to Kindle ->"
              variant="caption"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              marginTop: "13%",
              marginBottom: "15%",
            }}
          >
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList onChange={handleChange} aria-label="lab API tabs ">
                  <CustomTab
                    label="Synopsis"
                    value="1"
                    className={classes.tab}
                  />
                  <CustomTab
                    label="Who is it for?"
                    value="2"
                    className={classes.tab}
                  />
                  <CustomTab
                    label="About the author"
                    value="3"
                    className={classes.tab}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" className={classes.tab}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since galley of type and scrambled it to make a type
                specimen book.
              </TabPanel>
              <TabPanel value="2" className={classes.tab}>
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </TabPanel>
              <TabPanel value="3" className={classes.tab}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            margin: "0% 15%",
            width: "304px",
            height: "304px",
          }}
          src={book.imageLink}
          title="Paella dish"
        />
      </Box>
    </React.Fragment>
  );
};

export default BookDetailComponent;
