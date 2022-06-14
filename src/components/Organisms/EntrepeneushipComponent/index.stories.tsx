import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import EntrepeneushipPageComponent from ".";

const BookDetailComponentStory = {
  title: "BookDetailComponentStory",
  component: EntrepeneushipPageComponent,
} as ComponentMeta<typeof EntrepeneushipPageComponent>;

const Template: ComponentStory<typeof EntrepeneushipPageComponent> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <EntrepeneushipPageComponent {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  bookObject: getBooks(),
};

export default BookDetailComponentStory;
