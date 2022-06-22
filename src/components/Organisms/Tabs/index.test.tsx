import { ThemeProvider } from "@emotion/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import baseTheme from "../../../themes";
import Tabs from ".";
import { getBooks } from "../../../Data/data";

afterEach(cleanup);

const handleFinished = (arg: any) => {}

it("renders Currently Reading Tab Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <Tabs bookObject={getBooks()} onFinishedClick={handleFinished} value="1" />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const tab = screen.getByText("Currently Reading");

  expect(tab).toBeTruthy();
  expect(tab).toHaveClass("MuiTab-textColorPrimary");
  expect(tab).toBeInTheDocument();
  expect(tab).toBeDefined();
});

it("renders Finished Tab Organism", () => {
  render(
    <ThemeProvider theme={baseTheme}>
      <Tabs
        bookObject={getBooks()}
        onFinishedClick={handleFinished}
        value="2"
      />
    </ThemeProvider>,
    {
      wrapper: MemoryRouter,
    }
  );
  const tab = screen.getByText("Finished");

  expect(tab).toBeTruthy();
  expect(tab).toHaveClass("MuiTab-textColorPrimary");
  expect(tab).toBeInTheDocument();
  expect(tab).toBeDefined();
});
