import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import BookCard from "./BasicCard";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";

const BookCardStory = {
  title: "BookCardStory",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <BookCard {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  book:getBooks()[0],
   bookObject:getBooks(),
    typeOfCard:"reading",
    onFinishedClick: ()=>handleClick(getBooks()[0])
};

export const FinishedCard = Template.bind({});
FinishedCard.args = {
  book: getBooks()[0],
  bookObject: getBooks(),
  typeOfCard: "finished",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const AddToLibraryCard = Template.bind({});
AddToLibraryCard.args = {
  book: getBooks()[0],
  bookObject: getBooks(),
  typeOfCard: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};


export const ExploreCard = Template.bind({});
ExploreCard.args = {
  book: getBooks()[0],
  bookObject: getBooks(),
  typeOfCard: "explore",
  onFinishedClick: () => handleClick(getBooks()[0]),
};
export default BookCardStory;


const handleClick= (arg:any)=> {

}