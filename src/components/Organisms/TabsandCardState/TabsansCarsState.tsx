import { Box } from '@mui/material';
import BookCard from '../BookCard/BasicCard'

interface TabsandCardStateProps {
  type: string;
  onFinishedClick:(arg:Book)=>void;
  books:Array<Book>;
}

type Book = {
  id:number;
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

const TabsandCardState = (props:TabsandCardStateProps) => {
  const {type} = props
console.log(props.books)
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin:"0%"
      }}
    >
      {props.books.map((book: Book) => {
        const { status } = book
        return (
          <Box>
            {(type === status ) &&
            <BookCard
            key={book.author+book.title}
            onFinishedClick={() => props.onFinishedClick(book)}
              book={book}
              typeOfCard={props.type} 
              bookObject={props.books}/>
            }
          </Box>
        );
      })}
    </Box>
  );
}

export default TabsandCardState