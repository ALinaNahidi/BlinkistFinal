import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import BookDetailComponent from ".";
import { MemoryRouter } from "react-router-dom";

const BookDetailComponentStory = {
  title: "BookDetailComponentStory",
  component: BookDetailComponent,
} as ComponentMeta<typeof BookDetailComponent>;

const Template: ComponentStory<typeof BookDetailComponent> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <BookDetailComponent {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  book: getBooks()[0],
  bookObject: getBooks(),
 
};

export default BookDetailComponentStory;


