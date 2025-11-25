import { useState } from 'react'
import './App.css'
import { allPages } from './data/pages'
import { Checkbox } from './components/Checkbox'

function App() {
  const [pages, setPages] = useState(allPages)

  const updateCheckStatus = index => {
    setPages(
      pages.map((page, currentIndex) =>
        currentIndex === index
          ? { ...page, checked: !page.checked }
          : page
      )
    )
  }

  const allSelected = pages.length > 0 && pages.every(p => p.checked)
  const toggleSelectAll = () => {
    setPages(pages.map(page => ({ ...page, checked: !allSelected })))
  }

  return (
    <div className="App-root">
      <div className="modal">
        <div className="modal-inner">
          <Checkbox
            isChecked={allSelected}
            checkHandler={toggleSelectAll}
            label="All pages"
            index={-1}
          />

          <div className="divider" />

          <div className="list">
            {pages.map((page, index) => (
              <Checkbox
                key={page.name}
                isChecked={page.checked}
                checkHandler={() => updateCheckStatus(index)}
                label={page.name}
                index={index}
              />
            ))}
          </div>

          <div className="modal-actions">
            <button className="btn-done">Done</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
