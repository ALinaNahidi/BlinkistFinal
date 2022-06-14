import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import MyLibraryTemplate from ".";
import BookDetailComponent from "../../Organisms/BookDetailComponent";

const BookDetailTemplateStory = {
  title: "BookDetailTemplateStory",
  component: MyLibraryTemplate,
} as ComponentMeta<typeof MyLibraryTemplate>;

const Template: ComponentStory<typeof MyLibraryTemplate> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <MyLibraryTemplate {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const HomePage = Template.bind({});
HomePage.args = {

  bookDetailComponent: (
    <BookDetailComponent book={getBooks()[0]} bookObject={getBooks()} />
  ),
};



export default BookDetailTemplateStory;
