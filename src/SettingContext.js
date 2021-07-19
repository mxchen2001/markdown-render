import React, { Component, createContext, useState, useContext } from 'react'

import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import { FileContext } from './FileContext'

export const SettingContext = createContext()



function SettingContextProvider(props) {
    // const localValue = localStorage.getItem("value")
    const localSettings = localStorage.getItem("mdsettings")
    const localSettingsObj = localSettings === null ? null : JSON.parse(localStorage.getItem("mdsettings"))

    let newRemarkPlugins = [remarkSlug, remarkToc]
    let newRehypePlugins = [rehypeHighlight]
  
    const temp_gfm = localSettings === null ? true : localSettingsObj["gfm"]
    const temp_raw = localSettings === null ? false : localSettingsObj["raw"]
    const temp_math = localSettings === null ? false : localSettingsObj["math"]
  
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

    const [gfm, setGfm] = useState(temp_gfm)
    const [raw, setRaw] = useState(temp_raw)
    const [math, setMath] = useState(temp_math)

    const [remarkPlugins, setRemarkPlugins] = useState(newRemarkPlugins)
    const [rehypePlugins, setRehypePlugins] = useState(newRehypePlugins)

    const [dark, setDark] = useState(localSettings === null ? true : localSettingsObj["dark"])
    const [open, setOpen] = useState(localSettings === null ? true : localSettingsObj["preview"])


    return (
        <SettingContext.Provider value={{ gfm, setGfm, raw, setRaw, math, setMath, dark, setDark, rehypePlugins, setRehypePlugins, remarkPlugins, setRemarkPlugins, open, setOpen }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingContextProvider