import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import BookReadTime from ".";
const BookReadTimeStory = {
  title: "BookReadTimeStory",
  component: BookReadTime,
} as ComponentMeta<typeof BookReadTime>;

const Template: ComponentStory<typeof BookReadTime> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <BookReadTime {...args} />
  </ThemeProvider>
);

export const bookRead = Template.bind({});
bookRead.args = {
  children: "Add to library",
};

export default BookReadTimeStory;
