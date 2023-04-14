import React, { useState } from 'react'
import ContainerList from './ContainerList'
import BoxList from './BoxList'
import ContainerForm from './ContainerForm'
import BoxForm from './BoxForm'
import BoxListItem from './BoxListItem'

const App = () => {
  const [containers, setContainers] = useState([])
  const [boxes, setBoxes] = useState([])
  const [selectedContainerId, setSelectedContainerId] = useState(null)

  const handleAddContainer = (newContainer) => {
    setContainers([...containers, newContainer])
  }

  const handleAddBox = (newBox) => {
    setBoxes([...boxes, newBox])
  }

  const handleEditBox = (boxId, updates) => {
    setBoxes(
      boxes.map((box) => (box.id === boxId ? { ...box, ...updates } : box))
    )
  }

  const handleDeleteBox = (boxId) => {
    setBoxes(boxes.filter((box) => box.id !== boxId))
  }

  const handleDeleteContainer = (containerId) => {
    setContainers(
      containers.filter((container) => container.id !== containerId)
    )
    setBoxes(boxes.filter((box) => box.containerId !== containerId))
    setSelectedContainerId(null)
  }

  const handleContainerSelect = (containerId) => {
    setSelectedContainerId(containerId)
  }

  const getBox = (boxId) => boxes.find((box) => box.id === boxId)

  return (
    <div>
      <h1>Cargo Shipping Company Platform</h1>
      <h2>Create new container</h2>
      <ContainerForm onSubmit={handleAddContainer} />
      <h2>Containers</h2>
      <ContainerList
        containers={containers}
        onSelect={handleContainerSelect}
        onDelete={handleDeleteContainer}
      />
      {selectedContainerId && (
        <>
          <h2>Create new box</h2>
          <BoxForm
            containers={containers}
            containerId={selectedContainerId}
            onSubmit={handleAddBox}
          />
          <h2>Boxes</h2>
          <BoxList
            boxes={boxes.filter(
              (box) => box.containerId === selectedContainerId
            )}
            onBoxEdit={handleEditBox}
            onBoxDelete={handleDeleteBox}
            getBox={getBox}
          >
            {boxes
              .filter((box) => box.containerId === selectedContainerId)
              .map((box) => (
                <BoxListItem
                  key={box.id}
                  box={box}
                  onBoxDelete={handleDeleteBox}
                >
                  <BoxEditForm
                    box={box}
                    containers={containers}
                    onSubmit={(updates) => handleEditBox(box.id, updates)}
                  />
                </BoxListItem>
              ))}
          </BoxList>
        </>
      )}
    </div>
  )
}

export default App
