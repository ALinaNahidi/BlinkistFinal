import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import TypographyComponent from "../../atoms/Typography";
import BookReadTime, { TotalReads } from "../../molecules/BookRead";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";
import { Box, styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import AddToLibrary from "../../molecules/AddToLibrary";
import ReadAndFinished from "../../atoms/ReadandFinishedButton";
import { Link } from "react-router-dom";

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

interface BookCardProps {
  book: Book;
  typeOfCard?: string;
  onFinishedClick: (arg: any) => void;
  bookObject:Array<Book>;
}

const useStyles: any = makeStyles((theme: Theme) => ({
  titleOfBook: {
    color: "#03314B",
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "23px",
    paddingBottom: "3px",
  },
  authorName: {
    color: "#6D787E",
    fontWeight: "200 !important",
    fontSize: "16px",
    padding:"5px 0",
    lineHeight: "20px",
    paddingBottom: "3px",
  },

  Reads: {
    display: "flex",
    margin: "2px",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    paddingBottom: "6px",
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#E1ECFC",
  },
}));

const BookCard = (props: BookCardProps) => {
  const classes = useStyles();
  const typeOfCard = props.typeOfCard;
  return (
    <Box sx={{ padding: "12px 35px 20px 0px" }}>
      <Card
        sx={{
          width: "284px",
          borderRadius: "8px",
        }}
      >
        <CardMedia
          component="img"
          height="294.1"
          width="292"
          image={require("../../../Images/book1.png")}
          alt="Book Cover"
        />
        <CardContent>
          <Box className={classes.titleOfBook}>
            <TypographyComponent
              variant="subtitle"
              children={props.book.title}
            />
          </Box>
          <Box className={classes.authorName}>
            <TypographyComponent
              variant="subtitle"
              children={props.book.author}
            />
          </Box>
          <Box className={classes.Reads}>
            <BookReadTime />
            <TotalReads />
          </Box>
        </CardContent>
        {typeOfCard === "myLibrary" && (
          <Link
            to="/BookDetailPage"
            state={{ book: props.book, bookObject: props.bookObject }}
            key={props.book.link}
            style={{ textDecoration: "none" }}
          >
            <Box>
              <AddToLibrary children="Add to library" />
            </Box>
          </Link>
        )}
        {typeOfCard === "explore" && (
          <Box>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton aria-label="hamburger">
                <MoreHorizIcon />
              </IconButton>
            </CardActions>
            <BorderLinearProgress variant="determinate" value={30} />
          </Box>
        )}

        {typeOfCard === "finished" && (
          <Box>
            <ReadAndFinished
              children="Read again"
              onFinishedClicked={props.onFinishedClick}
            />
            <BorderLinearProgress variant="determinate" value={100} />
          </Box>
        )}

        {typeOfCard === "reading" && (
          <Box>
            <ReadAndFinished
              children="Finished"
              onFinishedClicked={props.onFinishedClick}
            />
            <BorderLinearProgress variant="determinate" value={30} />
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default BookCard;
