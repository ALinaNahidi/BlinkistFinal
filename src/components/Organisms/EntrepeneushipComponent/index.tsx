import * as React from "react";
import Box from "@mui/material/Box";
import CardStateTrending from "./cardState";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import { SubHeader } from "../../atoms/TextHeader";
import { useNavigate } from "react-router-dom";

interface EntrepeneushipComponentProp {
  bookObject: Array<Book>;
}

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
const useStyles = makeStyles((theme: Theme) => ({
  TabBox: {
    padding: "0 12px",
    borderBottom: "0",
    borderColor: "divider",
  },
  TabPanel: {
    padding: "0 12px",
  },
  Tab: {
    width: "25%",
    paddingLeft: "0px !important",
  },
}));

export default function EntrepeneushipPageComponent(
  props: EntrepeneushipComponentProp
) {
  const { bookObject } = props;
  const classes = useStyles();
  let navigate = useNavigate();

  const handleFinishedClick = (book: Book) => {
    console.log("from enreprenuship page");
    console.log(book);
    navigate("/", {
      state: { tab: "2", book: book, bookObjectFromState: props.bookObject },
    });
  };

  return (
    <Box>
      <SubHeader children="Trending blinks" varient="h5" />
      <Box className={classes.TabPanel}>
        <CardStateTrending
          type={["myLibrary", "reading"]}
          onFinishedClick={handleFinishedClick}
          books={bookObject}
          limit={bookObject.length > 6 ? 6 : bookObject.length}
        />
      </Box>
      <SubHeader children="Just added" varient="h5" />
      <Box className={classes.TabPanel}>
        <CardStateTrending
          type={["myLibrary"]}
          onFinishedClick={handleFinishedClick}
          books={bookObject}
          limit={bookObject.length > 3 ? 3 : bookObject.length}
        />
      </Box>

      <SubHeader children="Featured audio blinks" varient="h5" />
      <Box className={classes.TabPanel}>
        <CardStateTrending
          type={["myLibrary"]}
          onFinishedClick={handleFinishedClick}
          books={bookObject}
          limit={bookObject.length > 3 ? 3 : bookObject.length}
        />
      </Box>
    </Box>
  );
}
