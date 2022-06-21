// import { Box } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import TypographyComponent from "../../atoms/Typography";
// import Footer from "../../Organisms/Footer";
// import NavBar from "../../Organisms/NavBar";
// import BlinkistTabs from "../../Organisms/Tabs";
// import MyLibraryTemplate from "../../template/MyLibrarayTemplate";
// type Book = {
//   id: number;
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
//     id: 1,
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
//         setBookObject(await (await axios("http://localhost:8000/data")).data);
//       }

//     getBooksFormServer();

//     if (tab === "2") {
//       const updatePost = async () => {
//         const requestOptions = {
//           status: "finished",
//         };
//          await axios.patch(
//           `http://localhost:8000/data/${book.id}`,
//           requestOptions
//         );
//         setBookObject(await(await axios("http://localhost:8000/data")).data);
//       };

//       updatePost();

//       console.log(bookObjectFromState);
//     }
//   }, [count]);

//   const handleFinishedClick = (book: Book) => {
//     if (book.status === "reading") {
//       const updatePost = async () => {
//         const requestOptions = {
//           status: "finished",
//         };
//        await axios.patch(
//           `http://localhost:8000/data/${book.id}`,
//           requestOptions
//         );
//         setBookObject(await(await axios("http://localhost:8000/data")).data);
//       };
//       updatePost();

//       console.log(bookObjectFromState);
//     } else {
//       const updatePost = async () => {
//         const requestOptions = {
//           status: "reading",
//         };
//          await axios.patch(
//           `http://localhost:8000/data/${book.id}`,
//           requestOptions
//         );
//         setBookObject(await(await axios("http://localhost:8000/data")).data);
//       };

//       updatePost();

//       console.log(bookObjectFromState);
//     }
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
import store from "./topLevel";
import { loadblinks, updateBlinkStatus } from "../../../store/blinks";

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
  store.dispatch(loadblinks());
  const { state } = useLocation();
  var book = defaultProps.book;
  var tab = defaultProps.tab;
  var bookObjectFromState: any = store.getState().entities.blinks.list;

  const check = state as LocationState;
  console.log(check);
  if (check) {
    book = check.book;
    tab = check.tab;
  }

  const [bookObject, setBookObject] = React.useState(bookObjectFromState);

  const [count, setCount] = useState(0);

  React.useEffect(() => {
    store.dispatch(loadblinks());

    setBookObject(store.getState().entities.blinks.list);

    if (tab.toString() === "2" && book.status.toString() === "myLibrary") {
      handleMyLibrary();
    } else if (tab.toString() === "2" && book.status.toString() === "reading") {
      handleMyLibrary();
    }
  }, []);

  const handleFinishedClick = async (book: Book) => {
    if (book.status === "reading") {
      var response = await store.dispatch(
        updateBlinkStatus(book.id, "finished")
      );
      console.log(response);
      setCount(count + 1);

      setBookObject(store.getState().entities.blinks.list);
    } else {
      var response = await store.dispatch(
        updateBlinkStatus(book.id, "reading")
      );
      console.log(response);
      setCount(count + 1);

      setBookObject(store.getState().entities.blinks.list);
    }
    setCount(20);
  };

  const handleMyLibrary = async () => {
    var response = await store.dispatch(updateBlinkStatus(book.id, "finished"));
    console.log(response);
    setBookObject(store.getState().entities.blinks.list);
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
