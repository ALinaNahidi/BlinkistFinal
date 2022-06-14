import { Box } from "@mui/material";
import BookCard from "../BookCard/BasicCard";

interface CardStateTrendingProps {
  type: Array<string>;
  onFinishedClick: (arg: Book) => void;
  books: Array<Book>;
  limit: number;
  
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

const CardStateTrending = (props: CardStateTrendingProps) => {
  const { type, limit } = props;
  var count = 0;

  const handleCount = () => {
    count+=1
  };
  console.log(props.books);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0%",
      }}
    >
      {props.books.map((book: Book) => {
        const { status } = book;
        if (count < limit && type.includes(status)) {
          handleCount();
          return (
            <Box>
              <BookCard
                key={book.author + book.title}
                onFinishedClick={() => props.onFinishedClick(book)}
                book={book}
                typeOfCard={status}
                bookObject={props.books}
              />
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default CardStateTrending;
