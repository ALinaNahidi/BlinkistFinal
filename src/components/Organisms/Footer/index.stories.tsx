import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import ExploreDropDown from ".";
import Footer from ".";

const FooterStory = {
  title: "FooterStory",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <Footer/>
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});


export default FooterStory;
