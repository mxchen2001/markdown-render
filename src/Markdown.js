import React, { useState, useEffect, useContext } from 'react'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import { MarkdownWrapper } from './component/MarkdownWrapper'

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import {
  Drawer,
  CssBaseline,
  IconButton,
} from '@material-ui/core/';

import Editor from "@monaco-editor/react";

import { FileContext } from './FileContext';
import { SettingContext } from './SettingContext';
import Navbar from './Navbar'

const drawerWidth = "50%";

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(${100 - parseFloat(drawerWidth)}%)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerFull: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerPaperFull: {
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    // minHeight:"100vh",
    // height:"100%",
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: 0,
    overflow: 'hidden'
  },
  contentShift: {
    minHeight: "100vh",
    height: "100%",
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
    overflow: 'hidden'
  },
});

function Markdown(props) {
  const [value, setValue] = useState('')
  const [renderValue, setRenderValue] = useState('')
  const [indices, setIndices] = useState([-9, ''.length])

  const { gfm, raw, math, dark, rehypePlugins, remarkPlugins, open, setOpen } = useContext(SettingContext)
  const { file, saveFile } = useContext(FileContext)


  const parseValue = () => {
    let newIndices = [], n = 0, startIndex = 0;

    // start at beginning of input, "@newslide" is of length 9
    newIndices.push(-9)
    const sourceStr = value;
    const searchStr = '@newslide';

    const indexes = newIndices.concat([...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].filter(x => (x.index == 0 || value[x.index - 1] !== '`')).map(x => x.index));
    indexes.push(value.length)
    setIndices(indexes)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderValue(value)
      parseValue()
    }, 500);
    return () => clearTimeout(timer);
  }, [value])

  // save settings
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("mdsettings", JSON.stringify({ "gfm": gfm, "raw": raw, "math": math, "dark": dark, "preview": open }));
    }, 500);
    return () => clearTimeout(timer);
  }, [value, dark, gfm, raw, math, open])

  // render on filechange
  useEffect(() => {
    if (file == null) return
    localStorage.setItem("mdsettings", JSON.stringify({ "gfm": gfm, "raw": raw, "math": math, "dark": dark, "preview": open }));
    setValue(file.content)
  }, [file])

  useEffect(() => {
    if (file == null) return
    const timer = setTimeout(() => {
      const filename = file ? file.fname : 'newfile'
      saveFile(filename, value)
    }, 2000);
    return () => clearTimeout(timer);
  }, [value])

  const { classes } = props;

  return (
    <>
      <CssBaseline />
      <Navbar classes={classes} value={value} setValue={setValue} indices={indices} />
      <main className={clsx(classes.content, { [classes.contentShift]: open, })} style={{ height: '100vh', overflow: 'hidden', backgroundColor: dark ? '#1e1e1e' : '#ffffff' }}>
        <div className={classes.drawerHeader} />

        {/* Code Window */}
        <Editor
          height="100vh"
          defaultLanguage="markdown"
          theme={dark ? 'vs-dark' : 'vs-light'}
          value={value}
          onChange={(val) => setValue(val)}
          onMount={parseValue}
        />
      </main>

      <Drawer
        className={
          clsx(classes.drawer)
        }
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => {
            setOpen(false)
            localStorage.setItem("mdsettings", JSON.stringify({ "gfm": gfm, "raw": raw, "math": math, "dark": dark, "preview": false }));
          }}>
            <VisibilityOffIcon />
          </IconButton>
        </div>
        <div style={{ padding: '20px' }}>

          {/* Render Window */}
          <MarkdownWrapper
            value={renderValue}
            indices={indices}
            remarkPlugins={remarkPlugins}
            rehypePlugins={rehypePlugins}
          />
        </div>
      </Drawer>
    </>
  )
}

export default withStyles(styles)(Markdown);
