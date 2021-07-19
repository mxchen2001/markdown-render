import React, { Component, createContext, useState, useEffect } from 'react'


const initialValue = `# Markdown Slides Demo

Markdown Slides buit using react making use of \`material-ui\`, \`react-markdown\` and \`Monaco\`.

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


export const FileContext = createContext()

function FileContextProvider(props) {
    const localFiles = localStorage.getItem("mdfilesys")

    let initFile = { fname: 'untitled', content: initialValue }

    let localFilesParsed = Object.entries(JSON.parse(localFiles))
    if (Object.keys(localFilesParsed).length !== 0) {
        initFile = { fname: localFilesParsed[0][0], content: localFilesParsed[0][1] }
    }

    const [language, setLanguage] = useState('javascript')
    const [dark, setDark] = useState(true);
    const [file, setFile] = useState(initFile)
    const [filesys, setFilesys] = useState(localFiles === null ? {} : JSON.parse(localFiles))

    const saveFile = (filename, content) => {
        setFilesys(prevState => ({ ...prevState, [filename]: content }))
    }

    const addFile = (filename, content) => {
        setFilesys(prevState => ({ ...prevState, [filename]: content }))
    }

    const deleteFile = (filename) => {
        setFilesys(prevState => {
            const state = { ...prevState };
            delete state[filename];
            return state;
        })
    }

    useEffect(() => {
        localStorage.setItem('mdfilesys', JSON.stringify(filesys))
    }, [filesys])

    return (
        <FileContext.Provider value={{ language, setLanguage, dark, setDark, file, setFile, saveFile, deleteFile, addFile, initialValue, filesys }}>
            {props.children}
        </FileContext.Provider>
    )
}

export default FileContextProvider