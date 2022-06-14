import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../themes";
import { getBooks } from "../../../Data/data";
import { MemoryRouter } from "react-router-dom";
import MyLibraryTemplate from ".";
import BlinkistTabs from "../../Organisms/Tabs";
import { Box } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Footer from "../../Organisms/Footer";

const MyLibraryTemplateStory = {
  title: "MyLibraryTemplateStory",
  component: MyLibraryTemplate,
} as ComponentMeta<typeof MyLibraryTemplate>;

const Template: ComponentStory<typeof MyLibraryTemplate> = (args) => (
  <ThemeProvider theme={baseTheme}>
    <MemoryRouter>
      <MyLibraryTemplate {...args} />
    </MemoryRouter>
  </ThemeProvider>
);

const DummyView = (props:any) => (
  <div style={{ backgroundColor: props.color, height: props.height }}></div>
);

export const EmptyView = Template.bind({});
EmptyView.args = {
  blinkistTabs: <DummyView color="pink" height="80vh" />,
  header: <DummyView color="aqua" height="30vh" />,

};

export const HomePage = Template.bind({});
HomePage.args = {

    blinkistTabs:
          <BlinkistTabs
            value={"1"}
            onFinishedClick={()=> handleClick(getBooks()[0])}
            bookObject={getBooks()}
          />
        ,
        header:
          <Box sx={{ margin: "12% 0 4%" }}>
            <TypographyComponent children="My Library" variant="h3" />
          </Box>,
        
        footer:<Footer />,
};


const handleClick = (arg: any) => {};

export default MyLibraryTemplateStory;


