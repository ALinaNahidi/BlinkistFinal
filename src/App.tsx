import React from "react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "./themes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EnterpeneushipPage from "./components/pages/Entrepreneuship";
import MyLibraryPage from "./components/pages/LibraryPage";
import BookDetailPage from "./components/pages/BookDetailPage";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Routes>
        <Route path="/" element={<MyLibraryPage />} />
        <Route path="BookDetailPage" element={<BookDetailPage />} />
        <Route path="entrepeneuship" element={<EnterpeneushipPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
