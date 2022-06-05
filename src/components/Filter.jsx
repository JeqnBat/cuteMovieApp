import './css/filter.css'
import React, { useState, useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

const Filter = ({ categories }) => {
  const [index, setIndex] = useState(0)
  const [filter, setFilter] = useState(false)

  const { selector } = useStoreState((state) => state)
  const { updateSelector } = useStoreActions((actions) => actions)
  const { selectMovies } = useStoreActions((actions) => actions)
  const { selectCat } = useStoreActions((actions) => actions)
  const { prev } = useStoreActions((actions) => actions)
  const { next } = useStoreActions((actions) => actions)

  useEffect(() => {
    setIndex(selector.instances)
  }, [selector])
  
  const showFilter = () => {
    document.getElementById('movie-grid').classList.toggle('visible')
    setFilter(!filter)
  }
  const handleClick = (e, where) => {
    switch (where) {
      case 'selector':
        const number = Number(e.target.getAttribute('value'))
        updateSelector(number)
        break
      case 'prev':
        prev()
        break
      case 'next':
        next()
        break
      default:
        break
    }
    selectMovies()
  }

  return (
    <nav id="filter">
      <div className="spacer">
        <div>
          <h3 
            onClick={showFilter}
            style={filter ? {backgroundColor: 'var(--app-secondary'} : {backgroundColor: ''}}
            >FILTERS
          </h3>
        </div>
        <div></div>
        <div></div>
      </div>
      <div id="options">
        <section>
          <p>CATEGORIES</p>
            {categories.map((cat, index) => (
              <div key={index} onClick={() => selectCat(cat)}>{cat}</div>
            ))}
        </section>
        <section id="selector">
          <p>CARDS PER PAGE</p>
          <div
            value="4" 
            style={index === 4 ? {backgroundColor: 'var(--app-secondary)'} : {backgroundColor: ''}} 
            onClick={(e) => handleClick(e, 'selector')}>4</div>
          <div
            value="8" 
            style={index === 8 ? {backgroundColor: 'var(--app-secondary)'} : {backgroundColor: ''}} 
            onClick={(e) => handleClick(e, 'selector')}>8</div>
          <div 
            value="12" 
            style={index === 12 ? {backgroundColor: 'var(--app-secondary)'} : {backgroundColor: ''}} 
            onClick={(e) => handleClick(e, 'selector')}>12</div>
        </section>
        <section>
          <p className="nav" onClick={(e) => handleClick(e, 'prev')}>PREV.</p>
          <p className="nav" onClick={(e) => handleClick(e, 'next')}>NEXT.</p>
        </section>
      </div>
    </nav>
  )
}

export default Filter