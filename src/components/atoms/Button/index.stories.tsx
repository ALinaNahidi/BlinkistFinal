import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import baseTheme from "../../../themes";

import { ThemeProvider } from "@emotion/react";
import ButtonComponent from ".";

const ButtonComponentStory = {
  title: "ButtonComponent",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <ButtonComponent {...args} />
  </ThemeProvider>
);

export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  title: "Primary Button",
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  title: "Disabled Button",
  disabled: true,
};

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  title: "Contained Button",
  varient:"contained"
};

export default ButtonComponentStory;
