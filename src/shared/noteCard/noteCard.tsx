import React from 'react'
import './noteCard.scss'

const NoteCard = ({title, description}:any) => {
  return (
    <div className='main-note-card'>
        <p className='fs-14 fw-600' style={{marginBottom:"10px"}}>{title}</p>
        <p className='fs-12 dull-color'>{description}</p>
    </div>
  )
}

export default NoteCard