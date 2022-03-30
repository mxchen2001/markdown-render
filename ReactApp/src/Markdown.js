import React, { useState, useEffect, useContext } from 'react'
import { MarkdownWrapper } from './component/MarkdownWrapper'
import Editor from "@monaco-editor/react";
import './markdown.css'

import { StateContext } from './StateContext';
import Navbar from './Navbar'

function Markdown() {
  const [renderValue, setRenderValue] = useState('')
  const { value, setValue, indices, setIndices, defaultVal } = useContext(StateContext)

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
    }, 2000);
    return () => clearTimeout(timer);
  }, [value])

  return (
    <>
      <Navbar />
      <div className="editor-preview-container">
        <div className='editor-preview-item dark-editor'>
          <Editor
            height="99%"
            defaultLanguage="markdown"
            theme='vs-dark'
            value={value}
            onChange={(val) => setValue(val)}
            onMount={parseValue}
          />
        </div>
        <div className='editor-preview-item preview'>
          <MarkdownWrapper
            value={renderValue}
            indices={indices}
          />
        </div>
      </div>
    </>
  )
}

export default Markdown;
