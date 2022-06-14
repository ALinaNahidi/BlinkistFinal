import * as React from 'react';
import { Component } from 'react';
import {getBooks} from "../Data/data"

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
const DataContext = React.createContext(getBooks());

export default DataContext;