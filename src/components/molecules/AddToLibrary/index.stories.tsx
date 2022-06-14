import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";


import AddToLibrary from ".";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
const AddToLibraryComponent = {
  title: "AddToLibraryComponent",
  component: AddToLibrary,
} as ComponentMeta<typeof AddToLibrary>;

const Template: ComponentStory<typeof AddToLibrary> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <AddToLibrary {...args} />
  </ThemeProvider>
);

export const AddToLibraryStory = Template.bind({});
AddToLibraryStory.args = {
  children: "Add to library",
};

export default AddToLibraryComponent;
