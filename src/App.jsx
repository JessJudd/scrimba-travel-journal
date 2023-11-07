import './App.scss'
import travelData from './travelData.js'

import { JournalEntryItem } from './components/JournaIEntryItem.jsx'
import { NavBar } from './components/NavBar.jsx'

function App() {
  
  /* to do -> move this into JournalEntryList */
  const journal = travelData.map((entry) => {
    return <JournalEntryItem
      key={entry.id}
      entry={entry}
    />
  })

  return (
    <>
      <NavBar />
      <main className="journal-entry-list">
        {journal}
      </main>
    </>
  )
}

export default App
