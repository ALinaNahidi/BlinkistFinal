import React, { useContext } from 'react'
import EntrepeneushipPageComponent from '../../Organisms/EntrepeneushipComponent';
import Footer from '../../Organisms/Footer';
import NavBar from '../../Organisms/NavBar';
import image from "../../../Images/explore.png"
import { CardMedia } from '@mui/material';
import TextFieldSearch from '../../molecules/TextFieldSearch';
import { useLocation } from 'react-router-dom';
import EntrepeneushipTemplate from '../../template/EntrepeneushipPage';
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


const EnterpeneushipPage = () => {
  const { state } = useLocation();
  const bookObject = state as Array<Book>;
  console.log(bookObject)
  return (
    <React.Fragment>
      <NavBar bookObject={bookObject} />
      <EntrepeneushipTemplate
        image={
          <CardMedia
            sx={{ margin: "10% 0% 5%", width: "912px", height: "264px" }}
            image={image}
            title="Paella dish"
          />
        }
        searchBar={<TextFieldSearch />}
        entrepeneushipComponent={
          <EntrepeneushipPageComponent bookObject={bookObject} />
        }
      />

      <Footer />
    </React.Fragment>
  );
}

export default EnterpeneushipPage;