import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from ".";
import TextHeader from ".";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";

const TextHeaderStory = {
  title: "TextHeaderStory",
  component: TextHeader,
} as ComponentMeta<typeof TextHeader>;

const Template: ComponentStory<typeof TextHeader> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TextHeader {...args} />
  </ThemeProvider>
);

export const Header = Template.bind({});
Header.args = {
  children: "Header",
  varient: "h3",
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  children: "SubHeader",
  varient: "h5",
};




export default TextHeaderStory;
