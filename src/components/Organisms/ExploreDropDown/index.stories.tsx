import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import ExploreDropDown from ".";

const ExploreDropDownStory = {
  title: "ExploreDropDownStory",
  component: ExploreDropDown,
} as ComponentMeta<typeof ExploreDropDown>;

const Template: ComponentStory<typeof ExploreDropDown> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <ExploreDropDown {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const ReadCard = Template.bind({});
ReadCard.args = {
  bookObject: getBooks(),
};

export default ExploreDropDownStory;
