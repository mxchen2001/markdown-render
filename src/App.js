import React from 'react'

import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import SlideModal from './component/SlideModal'
import HelpModal from './component/HelpModal'
import { MarkdownWrapper, MarkdownWrapperHelper} from './component/MarkdownWrapper'

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import GetAppIcon from '@material-ui/icons/GetApp';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

import {
  Checkbox,
  FormControlLabel,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
} from '@material-ui/core/';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/theme/solarized.css';

import IOSSwitch from './component/Switch'

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
    minHeight:"100vh",
    height:"100%",
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: "-" + drawerWidth,
  },
  contentShift: {
    minHeight:"100vh",
    height:"100%",
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
});

// const localValue = localStorage.getItem("value")
const localValue = null
const localSettings = localStorage.getItem("settings")
const localSettingsObj = localSettings === null ? null : JSON.parse(localStorage.getItem("settings"))


const initialValue = `# Markdown Slides Demo

Markdown Slides buit using react making use of \`material-ui\`, \`react-markdown\` and \`CodeMirror\`.

This demo is adapted from the \`react-markdown\` demo.

👈 As you type inside the editor, 👉 the changes are rendered live.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Default (but optionally) follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Custom \`@newslide\` command

## Slides

You can seperate the markdown document into slides by breaking the content using a \`@newslide\`. Make sure to place this keyword on a separate line to prevent the parser from skipping letters. 

A \`@newslide\` is used below to separate the pages. 

You can enter Presentation Mode by clicking the Green Present button in the navbar. Use the **arrowkeys** to navigate the slides.

@newslide

# Plugins.

Here is an example of a plugin ([\`remark-toc\`](https://github.com/remarkjs/remark-toc)) in action. Notice how the table of contents only finds the up to **Syntax highlighting**. This is because each slide is individually rendered. However, clicking on the contents will scroll the preview window.


## Table of contents

## Dummy Heading

## Syntax highlighting

Here is an example of a plugin to highlight code:
[\`rehype-highlight\`](https://github.com/rehypejs/rehype-highlight).

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <Markdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</Markdown>,
  document.querySelector('#content')
)
\`\`\`

@newslide

# Formatting

## GitHub flavored markdown (GFM)

For GFM, we use [\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **enabled** by default but can be disabled (Not that you ever should).

👆 Use the checkbox to toggle the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

@newslide

# Formatting 2

## HTML in markdown

⚠️ HTML ([\`rehype-raw\`](https://github.com/rehypejs/rehype-raw)) unlike GFM can break your markdown code, thats why it is disabled by default.
You should probably combine it with [\`rehype-sanitize\`](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Latex (Katex)

Another usesful feature that many markdown renderer will have is Latex Support. This is **disabled** by default by can be enabled through the checkbox similar to GFM and HTML.

**You will needs to add newlines if the katex is not being rendered.**

Heres 2 ways of center math formulas:
<center>
  
$ f(a,b,c) = (a^2+b^2+c^2)^3 $
  
$ f(a,b,c) = (a^2+b^2+c^2)^3 $

</center>

Creating any html block with \`class="math math-inline"\`
<div class="math math-display">
  L = \\frac{1}{2} \\rho v^2 S C_L
</div>

Heres the average power formula
$ \\lim_{T \\to \\infty}\\frac{1}{2T} \\int_{-T}^{T} |u(t)|^{2} dt $ 
as an inline formula.

## More info?
You can access the repo on
[GitHub](https://github.com/mxchen2001/markdown-render)!
***
`
class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.onControlsChange = this.onControlsChange.bind(this)
    this.onSourceChange = this.onSourceChange.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
    this.onDownload = this.onDownload.bind(this)

    let newRemarkPlugins = [remarkSlug, remarkToc]
    let newRehypePlugins = [rehypeHighlight]

    const temp_gfm = localSettings === null? true : localSettingsObj["gfm"]
    const temp_raw = localSettings === null? false : localSettingsObj["raw"]
    const temp_math = localSettings === null? false : localSettingsObj["math"]

    if (temp_gfm) {
      newRemarkPlugins = newRemarkPlugins.concat(remarkGfm)
    }
    if (temp_raw) {
      newRehypePlugins = newRehypePlugins.concat(rehypeRaw)
    }
    if (temp_math) {
      newRemarkPlugins = newRemarkPlugins.concat(remarkMath)
      newRehypePlugins = newRehypePlugins.concat(rehypeKatex)
    }

    this.state = {
      value: localValue === null ? initialValue : localValue,
      indices: [-9, initialValue.length - 1],
      remarkPlugins: newRemarkPlugins,
      rehypePlugins: newRehypePlugins,
      gfm: temp_gfm,
      raw: temp_raw,
      math: temp_math,
      dark: localSettings === null? true : localSettingsObj["dark"],
      open: true,
      full: false,
    }

    console.log(localSettings)
  }

  toggleTheme() {
    const toggledState = !this.state.dark
    this.setState({
      dark: toggledState
    })
    localStorage.setItem("settings", JSON.stringify({"gfm": this.state.gfm, "raw": this.state.raw, "math": this.state.math, "dark": toggledState}));
  }

  parseValue() {
    let newIndices = [], n = 0, startIndex = 0;
    
    // start at beginning of input, "@newslide" is of length 9
    newIndices.push(-9)

    while(n >= 0) {
      n = this.state.value.indexOf("@newslide", startIndex);
      while(n != -1 && this.state.value[n - 1] === '`') {
        n = this.state.value.indexOf("@newslide", startIndex + 1);
        startIndex =  n + 9
      }

      newIndices.push((n === -1 ? this.state.value.length - 1 : n))
      startIndex =  n + 9
    }

    this.setState({
      indices: newIndices
    })
  }

  // Download
  onDownload(evt) {
    const element = document.createElement("a")
    const file = new Blob([this.state.value],    
    {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "markdown-slides.md";
    document.body.appendChild(element);
    element.click();
  }

  
  // Editor Windows Changes
  onSourceChange(evt, change) {
    this.setState({value: evt.getValue()}, )
    localStorage.setItem("value", this.state.value);
    this.parseValue()
  }

  pluginHelper(temp_gfm, temp_raw, temp_math) {
    let newRemarkPlugins = [remarkSlug, remarkToc]
    let newRehypePlugins = [rehypeHighlight]

    if (temp_gfm) {
      newRemarkPlugins = newRemarkPlugins.concat(remarkGfm)
    }
    if (temp_raw) {
      newRehypePlugins = newRehypePlugins.concat(rehypeRaw)
    }
    if (temp_math) {
      newRemarkPlugins = newRemarkPlugins.concat(remarkMath)
      newRehypePlugins = newRehypePlugins.concat(rehypeKatex)
    }

    this.setState({
      remarkPlugins: newRemarkPlugins,
      rehypePlugins: newRehypePlugins
    })
  }

  // Include Render Options
  onControlsChange(event) {
    const name = event.target.name
    const checked = event.target.checked

    let temp_gfm = this.state.gfm, temp_raw = this.state.raw, temp_math = this.state.math;

    if (name === 'gfm') {
      this.setState({
        gfm: checked
      })
      temp_gfm = checked;
    } else if (name === "raw"){
      this.setState({
        raw: checked
      })
      temp_raw = checked;
    } else if (name === "math") {
      this.setState({
        math: checked
      })
      temp_math = checked;
    }
    this.pluginHelper(temp_gfm, temp_raw, temp_math)
    localStorage.setItem("settings", JSON.stringify({"gfm": temp_gfm, "raw": temp_raw, "math": temp_math, "dark": this.state.dark}));
  }

  render() {
    const { classes } = this.props;

    return (
      <>
          <CssBaseline />
          <AppBar
            position="fixed"
            style={{ background: '#232932' }}
            className={clsx(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar>
              <Typography variant="h6" noWrap className={classes.title}>
                Markdown Slides
              </Typography>

              {/* Dark mode toggle */}
              <IOSSwitch checked={this.state.dark} onClick={this.toggleTheme}/>

              {/* Github Formatted Markdown */}
              <FormControlLabel
                control={
                  <Checkbox
                  checked={this.state.gfm}
                  style ={{
                    color: "#f0ad4e",
                  }}
                  name="gfm"
                  onChange={this.onControlsChange}
                  />
                }
                label="GFM"
                />

              {/* Pure HTML Formatted Markdown */}
              <FormControlLabel
                control={
                  <Checkbox
                  checked={this.state.raw}
                  style ={{
                    color: "#5bc0de",
                  }}
                  name="raw"
                  onChange={this.onControlsChange}
                  />
                }
                label="HTML"
              />

              {/* Katex Markdown */}
              <FormControlLabel
                control={
                  <Checkbox
                  checked={this.state.math}
                  style ={{
                    color: "#f59e0b",
                  }}
                  name="math"
                  onChange={this.onControlsChange}
                  />
                }
                label="LATEX"
              />

              {/* Presentation Modal */}
              <SlideModal
                value={this.state.value}
                indices={this.state.indices}
                remarkPlugins={this.state.remarkPlugins}
                rehypePlugins={this.state.rehypePlugins}
              />

              {/* Download Button */}
              <IconButton style={{color: "#5bc0de"}} onClick={this.onDownload}>
                <GetAppIcon />
              </IconButton>
              <HelpModal/>

              {/* Help Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => {
                  this.setState({
                    open: true
                  })
                }}
                className={clsx(this.state.open && classes.hide)}
              >
                <VisibilityIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        <main className={clsx(classes.content, { [classes.contentShift]: this.state.open,})} style={{backgroundColor: this.state.dark ? '#2a2d41': '#ffffff'}}>
            <div className={classes.drawerHeader} />

            {/* Code Window */}
            <CodeMirror
              value={this.state.value}
              options={{
                theme: this.state.dark? 'material-palenight' : 'solarized',
                tabSize: 2,
                keyMap: 'sublime',
                mode: 'markdown',
              }}
              onChange={this.onSourceChange}
            />
          </main>

          <Drawer
            className={
              clsx(classes.drawer, {
                [classes.drawerFull]: this.state.full,
              })
            }
            variant="persistent"
            anchor="right"
            open={this.state.open}
            classes={{
              paper: clsx(classes.drawerPaper, {
                [classes.drawerPaperFull]: this.state.full,
              }),
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={() => {
                  this.setState({
                    open: false,
                    full: false
                  })
                }}>
                <VisibilityOffIcon />
              </IconButton>
              <IconButton onClick={() => {
                  this.setState({
                    full: !this.state.full
                  })
                }}>
                <FullscreenIcon />
              </IconButton>
            </div>
            <div style={{padding: '20px'}}>

              {/* Render Window */}
              <MarkdownWrapper 
                value={this.state.value}
                indices={this.state.indices}
                remarkPlugins={this.state.remarkPlugins}
                rehypePlugins={this.state.rehypePlugins}
              />
            </div>
          </Drawer>
      </>
    )
  }
}

export default withStyles(styles)(App);
