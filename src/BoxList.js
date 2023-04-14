import React, { useState } from 'react'
import BoxListItem from './BoxListItem'
import BoxEditForm from './BoxEditForm'
import BoxForm from './BoxForm'

const BoxList = ({ boxes, onBoxEdit, onBoxDelete, getBox, containers }) => {
  const [selectedBoxId, setSelectedBoxId] = useState(null)

  const handleBoxSelect = (boxId) => {
    setSelectedBoxId(boxId)
  }

  const handleBoxEditSubmit = (updates) => {
    onBoxEdit(selectedBoxId, updates)
    setSelectedBoxId(null)
  }

  const handleBoxDelete = (boxId) => {
    onBoxDelete(boxId)
    setSelectedBoxId(null)
  }

  const handleBoxCreate = (newBox) => {
    onBoxEdit(newBox.id, newBox)
    setSelectedBoxId(null)
  }

  return (
    <div>
      <ul>
        {boxes.map((box) => (
          <BoxListItem
            key={box.id}
            box={box}
            onBoxSelect={handleBoxSelect}
            onBoxDelete={handleBoxDelete}
            isSelected={box.id === selectedBoxId}
          />
        ))}
      </ul>
      {selectedBoxId && (
        <BoxEditForm
          box={getBox(selectedBoxId)}
          containers={containers}
          onSubmit={handleBoxEditSubmit}
        />
      )}
      <BoxForm
        containers={containers.filter(
          (container) =>
            !boxes.some(
              (box) => box.containerId === container.id && !box.isDeleted
            )
        )}
        onSubmit={handleBoxCreate}
      />
    </div>
  )
}

export default BoxList
