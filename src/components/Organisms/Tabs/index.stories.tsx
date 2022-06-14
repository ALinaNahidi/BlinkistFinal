import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import BlinkistTabs from ".";

const Tabs = {
  title: "Tabs",
  component: BlinkistTabs,
} as ComponentMeta<typeof BlinkistTabs>;

const Template: ComponentStory<typeof BlinkistTabs> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <BlinkistTabs {...args} />
    </MemoryRouter>
  </ThemeProvider>
);


export const CurrentlyReadingTab = Template.bind({});
CurrentlyReadingTab.args = {
 
  bookObject: getBooks(),
  value:"1",
  onFinishedClick: () => handleClick(getBooks()[0]),
};

export const FinishedTab = Template.bind({});
FinishedTab.args = {
 
  bookObject: getBooks(),
  value:"2",
  onFinishedClick: () => handleClick(getBooks()[0]),
};


export default Tabs;

const handleClick = (arg: any) => {};
