import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabsandCardState from "../TabsandCardState/TabsansCarsState";
import { makeStyles } from "@mui/styles";
import { Theme } from "@emotion/react";

type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
};

interface BlinkistTabsProps {
  value: string;
  onFinishedClick: (arg: Book) => void;
  bookObject: Array<Book>;
}

const useStyles = makeStyles((theme: Theme) => ({
  TabBox: {
    padding: "0 12px",
    borderBottom: "0",
    borderColor: "divider",
  },
  TabPanel: {
    padding: "0 12px",
  },
  Tab: {
    width: "25%",
    paddingLeft: "0px !important",
  },
}));

export default function BlinkistTabs(props: BlinkistTabsProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box className={classes.TabBox}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs"
            sx={{ alignItems: "self-start", justifyContent: "flex-start" }}
          >
            <Tab
              disableRipple
              label="Currently Reading"
              value="1"
              className={classes.Tab}
            />
            <Tab
              disableRipple
              label="Finished"
              value="2"
              className={classes.Tab}
            />
          </TabList>
        </Box>
        <TabPanel value="1" className={classes.TabPanel}>
          <TabsandCardState
            type="reading"
            onFinishedClick={(book)=>props.onFinishedClick(book)}
            books={props.bookObject}
          />
        </TabPanel>
        <TabPanel value="2" className={classes.TabPanel}>
          <TabsandCardState
            type="finished"
            onFinishedClick={(book)=>props.onFinishedClick(book)}
            books={props.bookObject}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
