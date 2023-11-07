import React from "react"

import travelData from '../travelData.js'

// import { JournalEntryItem } from '/JournalEntryItem.jsx'

const journal = travelData.map((entry) => {
    // return <JournalEntryItem
    //     key={entry.id}
    //     entry={entry}
    // />
    return (
        <h1>{entry.id}</h1>
    )
})

export const JournalEntryList = ({entry}) => {  
    return (
        {journal}
    )
}