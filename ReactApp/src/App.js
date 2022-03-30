import React from 'react'
import Markdown from './Markdown'
import FileContextProvider from './FileContext'
import SettingContextProvider from './SettingContext'

export default function App() {
    return (
        <div>
            <FileContextProvider>
                <SettingContextProvider>
                    <Markdown />
                </SettingContextProvider>
            </FileContextProvider>
        </div>
    )
}
