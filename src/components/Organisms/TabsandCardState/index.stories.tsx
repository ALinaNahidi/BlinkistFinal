import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import TabsandCardState from "./TabsansCarsState";

const CardState = {
  title: "CardState",
  component: TabsandCardState,
} as ComponentMeta<typeof TabsandCardState>;

const Template: ComponentStory<typeof TabsandCardState> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <TabsandCardState {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadingCards = Template.bind({});
ReadingCards.args = {
  books: getBooks(),
  type: "reading",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const FinishedCards = Template.bind({});
FinishedCards.args = {
  books: getBooks(),
  type: "finished",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const LibraryCards = Template.bind({});
LibraryCards.args = {
  books: getBooks(),
  type: "myLibrary",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export default CardState;

const handleClick = (arg: any) => {};
