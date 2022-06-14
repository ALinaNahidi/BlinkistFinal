import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from ".";
import { Box, Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import ReadAndFinished from ".";

const ReadandFinishedButton = {
  title: "ReadandFinishedButton",
  component: ReadAndFinished,
} as ComponentMeta<typeof ReadAndFinished>;

const Template: ComponentStory<typeof ReadAndFinished> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <ReadAndFinished {...args} />
  </ThemeProvider>
);

export const Reading = Template.bind({});
Reading.args = {
  children: "Reading",
};

export const Finished = Template.bind({});
Finished.args = {
  children: "Finished",
};

export default ReadandFinishedButton;
