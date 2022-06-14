import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import MyLibraryTemplate from ".";
import { CardMedia } from "@mui/material";
import TextFieldSearch from "../../molecules/TextFieldSearch";
import EntrepeneushipPageComponent from "../../Organisms/EntrepeneushipComponent";
import image from "../../../Images/explore.png";
import EntrepeneushipTemplate from ".";

const EntrepreneushipTemplateStory = {
  title: "EntrepreneushipTemplateStory",
  component: EntrepeneushipTemplate,
} as ComponentMeta<typeof EntrepeneushipTemplate>;

const Template: ComponentStory<typeof EntrepeneushipTemplate> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <EntrepeneushipTemplate {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

export const HomePage = Template.bind({});
HomePage.args = {


  image: (
    <CardMedia
      sx={{ margin: "6% 17% 0% 15%", width: "912px", height: "264px" }}
      image={image}
      title="Paella dish"
    />
  ),
  searchBar: <TextFieldSearch />,
  entrepeneushipComponent: (
    <EntrepeneushipPageComponent bookObject={getBooks()} />
  ),
};

export default EntrepreneushipTemplateStory;
