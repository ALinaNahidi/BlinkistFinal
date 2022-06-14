import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import NavBar from ".";

const NavBarStory = {
  title: "NavBarStory",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <NavBar {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const CurrentlyReadingTab = Template.bind({});
CurrentlyReadingTab.args = {
  bookObject: getBooks(),
  
};

export const FinishedTab = Template.bind({});
FinishedTab.args = {
  bookObject: getBooks(),
  
};

export default NavBarStory;


