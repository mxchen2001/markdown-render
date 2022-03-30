import React from 'react'
import Markdown from './Markdown'
import StateContextProvider from './StateContext'

export default function App() {
    return (
        <StateContextProvider>
            <Markdown />
        </StateContextProvider>
    )
}
