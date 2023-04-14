import React, { useState } from 'react'

const ContainerList = () => {
  const [selectedContainer, setSelectedContainer] = useState('')
  const [containers, setContainers] = useState([])

  const handleContainerChange = (e) => {
    setSelectedContainer(e.target.value)
  }

  const handleAddContainer = () => {}

  return (
    <div>
      <label htmlFor="container-select">Containers:</label>
      <select
        id="container-select"
        value={selectedContainer}
        onChange={handleContainerChange}
      >
        <option value="">Pick Container</option>
        {containers.map((container) => (
          <option key={container.id} value={container.id}>
            {container.name}
          </option>
        ))}
      </select>
      <br />
      <button type="button" onClick={handleAddContainer}>
        Add Container
      </button>
    </div>
  )
}

export default ContainerList
