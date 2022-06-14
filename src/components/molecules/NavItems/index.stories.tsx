import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";

import NavItems from ".";
const NavItemsStory = {
  title: "NavItemsStory",
  component: NavItems,
} as ComponentMeta<typeof NavItems>;

const Template: ComponentStory<typeof NavItems> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <NavItems {...args} />
  </ThemeProvider>
);

export const navItems = Template.bind({});
navItems.args = {
  children: "Explore",
};

export default NavItemsStory;
