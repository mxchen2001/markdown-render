import React from 'react'
import ReactDOM from 'react-dom'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
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
import 'codemirror/theme/nord.css';

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
    backgroundColor: "#2d3541",
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
    backgroundColor: "#2d3541",
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

const initialValue = `# A demo of \`react-markdown\`

\`react-markdown\` is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`h1\`)
* Has a lot of plugins

## Table of contents

Here is an example of a plugin in action
([\`remark-toc\`](https://github.com/remarkjs/remark-toc)).
This section is replaced by an actual table of contents.

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

Pretty neat, eh?

## GitHub flavored markdown (GFM)

For GFM, you can *also* use a plugin:
[\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use).
It adds support for GitHub-specific extensions to the language:
tables, strikethrough, tasklists, and literal URLs.

These features **do not work by default**.
👆 Use the toggle above to add the plugin.

| Feature    | Support              |
| ---------: | :------------------- |
| CommonMark | 100%                 |
| GFM        | 100% w/ \`remark-gfm\` |

~~strikethrough~~

* [ ] task list
* [x] checked item

https://example.com

## HTML in markdown

⚠️ HTML in markdown is quite unsafe, but if you want to support it, you can
use [\`rehype-raw\`](https://github.com/rehypejs/rehype-raw).
You should probably combine it with
[\`rehype-sanitize\`](https://github.com/rehypejs/rehype-sanitize).

<blockquote>
  👆 Use the toggle above to add the plugin.
</blockquote>

## Components

You can pass components to change things:

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'

ReactDOM.render(
  <Markdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
    # Your markdown here
  </Markdown>,
  document.querySelector('#content')
)
\`\`\`

## More info?

Much more info is available in the
[readme on GitHub](https://github.com/remarkjs/react-markdown)!

***

A component by [Espen Hovlandsdal](https://espen.codes/)`
class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.onControlsChange = this.onControlsChange.bind(this)
    this.onSourceChange = this.onSourceChange.bind(this)

    this.state = {
      value: initialValue,
      indices: [-9, initialValue.length - 1],
      remarkPlugins: [remarkGfm, remarkSlug, remarkToc],
      rehypePlugins: [[rehypeHighlight, {ignoreMissing: true}]],
      open: true,
      full: false
    }
  }

  parseValue() {
    let newIndices = [], n = 0, startIndex = 0;
    
    // start at beginning of input, "@newslide" is of length 9
    newIndices.push(-9)

    while(n >= 0) {
      n = this.state.value.indexOf("@newslide", startIndex);
      newIndices.push((n === -1 ? this.state.value.length - 1 : n))
      startIndex +=  n + 9
    }

    this.setState({
      indices: newIndices
    })
  }

  // Download
  onDownload = () => {

    const element = document.createElement("a")
    console.log(this.state.value)
    const file = new Blob([this.state.value],    
    {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "markdown-slides.md";
    document.body.appendChild(element);
    element.click();
  }

  // Editor Windows Changes
  onSourceChange(evt, change) {
    this.setState({value: evt.getValue()})
    this.parseValue()
  }

  // Include Render Options
  onControlsChange(event) {
    const name = event.target.name
    const checked = event.target.checked

    if (name === 'gfm') {
      this.setState({
        remarkPlugins: (checked ? [remarkGfm] : []).concat(
          remarkSlug,
          remarkToc
        )
      })
    } else {
      this.setState({
        rehypePlugins: (checked ? [rehypeRaw] : []).concat(rehypeHighlight)
      })
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
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

              <SlideModal
                value={this.state.value}
                indices={this.state.indices}
                remarkPlugins={this.state.remarkPlugins}
                rehypePlugins={this.state.rehypePlugins}
              />
              {/* Github Formatted Markdown */}
              <FormControlLabel
                control={
                  <Checkbox
                  defaultChecked
                  style ={{
                    color: "#f0ad4e",
                  }}
                  name="gfm"
                  onChange={this.onControlsChange}
                  />
                }
                label="Use remark-gfm"
                />

              {/* Pure HTML Formatted Markdown */}
              <FormControlLabel
                control={
                  <Checkbox
                  style ={{
                    color: "#5bc0de",
                  }}
                  name="raw"
                  onChange={this.onControlsChange}
                  />
                }
                label="Use rehype-raw"
              />
              <IconButton style={{color: "#5bc0de"}} onClick={this.onDownload}>
                <GetAppIcon />
              </IconButton>
              <HelpModal/>
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
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: this.state.open,
            })}
          >
            <div className={classes.drawerHeader} />
            {/* Code Window */}

            <CodeMirror
              value={this.state.value}
              options={{
                theme: 'nord',
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
        </div>
      </>
    )
  }
}

export default withStyles(styles)(App);
