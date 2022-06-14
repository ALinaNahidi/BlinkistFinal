import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import TextFieldSearch from ".";
const SearchField = {
  title: "SearchField",
  component: TextFieldSearch,
} as ComponentMeta<typeof TextFieldSearch>;

const Template: ComponentStory<typeof TextFieldSearch> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TextFieldSearch  />
  </ThemeProvider>
);

export const textFieldSearch = Template.bind({});


export default SearchField;
