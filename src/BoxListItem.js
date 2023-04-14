import React, { useState } from 'react'
import BoxEditForm from './BoxEditForm'

const BoxListItem = ({ box, onBoxDelete, onBoxEdit }) => {
  const [isEditing, setIsEditing] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCancelClick = () => {
    setIsEditing(false)
  }

  const handleSaveClick = (updates) => {
    onBoxEdit(box.id, updates)
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <BoxEditForm
          box={box}
          onSubmit={handleSaveClick}
          onCancel={handleCancelClick}
        />
      ) : (
        <>
          <h3>{box.name}</h3>
          <p>Weight: {box.weight}</p>
          <p>Is flammable: {box.isFlammable ? 'Yes' : 'No'}</p>
          <p>Is fragile: {box.isFragile ? 'Yes' : 'No'}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onBoxDelete(box.id)}>Delete</button>
        </>
      )}
    </div>
  )
}

export default BoxListItem
