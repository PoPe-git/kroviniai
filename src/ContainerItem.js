import React from 'react'

const ContainerItem = ({ container }) => {
  const handleDelete = () => {}

  return (
    <div>
      <h2>Container {container.id}</h2>
      <p>Container type {container.type}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default ContainerItem
