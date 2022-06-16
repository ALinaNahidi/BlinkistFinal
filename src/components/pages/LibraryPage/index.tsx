// import { Box } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { getBooks } from "../../../Data/data";
// import TypographyComponent from "../../atoms/Typography";
// import Footer from "../../Organisms/Footer";
// import NavBar from "../../Organisms/NavBar";
// import BlinkistTabs from "../../Organisms/Tabs";
// import MyLibraryTemplate from "../../template/MyLibrarayTemplate";
// type Book = {
//   author: string;
//   country: string;
//   imageLink: string;
//   language: string;
//   link: string;
//   pages: number;
//   title: string;
//   year: number;
//   readTime: string;
//   readersCount: string;
//   status: string;
// };

// interface LocationState {
//   book: Book;
//   tab: string;
//   bookObjectFromState: Array<Book>;
// }
// const defaultProps = {
//   book: {
//     author: "",
//     country: "",
//     imageLink: "",
//     language: "",
//     link: "",
//     pages: 0,
//     title: "",
//     year: 1958,
//     readTime: "",
//     readersCount: "",
//     status: "",
//   },
//   tab: "1",
// };

// const MyLibraryPage = () => {
//   const { state } = useLocation();
//   var book = defaultProps.book;
//   var tab = defaultProps.tab;
//   var bookObjectFromState: any = [];

//   const check = state as LocationState;
//   console.log(check);
//   if (check) {
//     book = check.book;
//     tab = check.tab;
//     bookObjectFromState = check.bookObjectFromState;
//   }

//   const [bookObject, setBookObject] = React.useState(bookObjectFromState);

//   const [count, setCount] = useState("");

//   React.useEffect(() => {
//     const getBooksFormServer = async () => {
//       if (check) {
//         setBookObject(check.bookObjectFromState);
//       } else {
//         setBookObject(await (await axios("http://localhost:8000/data")).data);
//       }
//     };
//     getBooksFormServer();
//     if (tab === "2") {
//       const bookObjectTemp = [...bookObject];

//       var index = -1;
//       for (let i = 0; i < bookObjectTemp.length; i++) {
//         if (
//           bookObjectTemp[i].title === book.title &&
//           bookObjectTemp[i].pages === book.pages
//         )
//           index = i;
//       }
//       bookObjectTemp[index].status === "myLibrary"
//         ? (bookObjectTemp[index].status = "finished")
//         : (bookObjectTemp[index].status = "finished");

//       if (bookObjectTemp[index].status === "reading") {
//         handleFinishedClick(book);
//       }

//       setBookObject([...bookObjectTemp]);
//     }
//   }, [count]);

//   const handleFinishedClick = (book: Book) => {
//     const bookObjectTemp = [...bookObject];
//     const index = bookObjectTemp.indexOf(book);
//     bookObjectTemp[index] = { ...book };

//     bookObjectTemp[index].status === "reading"
//       ? (bookObjectTemp[index].status = "finished")
//       : (bookObjectTemp[index].status = "reading");

//     setBookObject([...bookObjectTemp]);
//     console.log(bookObject);
//   };

//   return (
//     <React.Fragment>
//       <NavBar bookObject={bookObject} />
//       <MyLibraryTemplate

//         blinkistTabs={
//           <BlinkistTabs
//             value={tab}
//             onFinishedClick={handleFinishedClick}
//             bookObject={bookObject}
//           />
//         }
//         header={
//           <Box sx={{ margin: "12% 0 4%" }}>
//             <TypographyComponent children="My Library" variant="h3" />
//           </Box>
//         }
//         footer={<Footer />}
//       />
//       <Footer />
//     </React.Fragment>
//   );
// };

// export default MyLibraryPage;

import { Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TypographyComponent from "../../atoms/Typography";
import Footer from "../../Organisms/Footer";
import NavBar from "../../Organisms/NavBar";
import BlinkistTabs from "../../Organisms/Tabs";
import MyLibraryTemplate from "../../template/MyLibrarayTemplate";
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

interface LocationState {
  book: Book;
  tab: string;
  bookObjectFromState: Array<Book>;
}
const defaultProps = {
  book: {
    id: 1,
    author: "",
    country: "",
    imageLink: "",
    language: "",
    link: "",
    pages: 0,
    title: "",
    year: 1958,
    readTime: "",
    readersCount: "",
    status: "",
  },
  tab: "1",
};

const MyLibraryPage = () => {
  const { state } = useLocation();
  var book = defaultProps.book;
  var tab = defaultProps.tab;
  var bookObjectFromState: any = [];

  const check = state as LocationState;
  console.log(check);
  if (check) {
    book = check.book;
    tab = check.tab;
    bookObjectFromState = check.bookObjectFromState;
  }

  const [bookObject, setBookObject] = React.useState(bookObjectFromState);

  const [count, setCount] = useState("");

  React.useEffect(() => {
    const getBooksFormServer = async () => {
        setBookObject(await (await axios("http://localhost:8000/data")).data);
      }

    getBooksFormServer();

    if (tab === "2") {
      const updatePost = async () => {
        const requestOptions = {
          status: "finished",
        };
         await axios.patch(
          `http://localhost:8000/data/${book.id}`,
          requestOptions
        );
        setBookObject(await(await axios("http://localhost:8000/data")).data);
      };

      updatePost();
     
      console.log(bookObjectFromState);
    }
  }, [count]);

  const handleFinishedClick = (book: Book) => {
    if (book.status === "reading") {
      const updatePost = async () => {
        const requestOptions = {
          status: "finished",
        };
       await axios.patch(
          `http://localhost:8000/data/${book.id}`,
          requestOptions
        );
        setBookObject(await(await axios("http://localhost:8000/data")).data);
      };
      updatePost();
      
      console.log(bookObjectFromState);
    } else {
      const updatePost = async () => {
        const requestOptions = {
          status: "reading",
        };
         await axios.patch(
          `http://localhost:8000/data/${book.id}`,
          requestOptions
        );
        setBookObject(await(await axios("http://localhost:8000/data")).data);
      };

      updatePost();
  
      console.log(bookObjectFromState);
    }
  };

  return (
    <React.Fragment>
      <NavBar bookObject={bookObject} />
      <MyLibraryTemplate
        blinkistTabs={
          <BlinkistTabs
            value={tab}
            onFinishedClick={handleFinishedClick}
            bookObject={bookObject}
          />
        }
        header={
          <Box sx={{ margin: "12% 0 4%" }}>
            <TypographyComponent children="My Library" variant="h3" />
          </Box>
        }
        footer={<Footer />}
      />
      <Footer />
    </React.Fragment>
  );
};

export default MyLibraryPage;
