import React, { useState } from 'react'

const BoxForm = ({ containers, containerId, onSubmit, selectedBox }) => {
  const [weight, setWeight] = useState(selectedBox ? selectedBox.weight : '')
  const [name, setName] = useState(selectedBox ? selectedBox.name : '')
  const [image, setImage] = useState(selectedBox ? selectedBox.image : '')
  const [isFlammable, setIsFlammable] = useState(
    selectedBox ? selectedBox.isFlammable : false
  )
  const [isFragile, setIsFragile] = useState(
    selectedBox ? selectedBox.isFragile : false
  )
  const [selectedContainerId, setSelectedContainerId] = useState(
    selectedBox ? selectedBox.containerId : containerId
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBox = {
      weight: weight,
      name: name,
      image: image,
      isFlammable: isFlammable,
      isFragile: isFragile,
      containerId: selectedContainerId,
    }
    onSubmit(newBox)
    setWeight('')
    setName('')
    setImage('')
    setIsFlammable(false)
    setIsFragile(false)
  }

  const handleCancel = () => {
    setWeight('')
    setName('')
    setImage('')
    setIsFlammable(false)
    setIsFragile(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="weight">Weight (kg): </label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isFlammable">Is flammable? </label>
        <input
          type="checkbox"
          id="isFlammable"
          checked={isFlammable}
          onChange={(e) => setIsFlammable(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="isFragile">Is fragile? </label>
        <input
          type="checkbox"
          id="isFragile"
          checked={isFragile}
          onChange={(e) => setIsFragile(e.target.checked)}
        />
      </div>
      {selectedBox ? (
        <div>
          <label htmlFor="container">Container: </label>
          <select
            id="container"
            value={selectedContainerId}
            onChange={(e) => setSelectedContainerId(e.target.value)}
          >
            {containers.map((container) => (
              <option key={container.id} value={container.id}>
                {container.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input type="hidden" value={selectedContainerId} />
      )}
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default BoxForm
