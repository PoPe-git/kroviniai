import React, { useState } from 'react'

const BoxEditForm = ({ box, containers, onSubmit }) => {
  const [name, setName] = useState(box.name)
  const [weight, setWeight] = useState(box.weight)
  const [isFlammable, setIsFlammable] = useState(box.isFlammable)
  const [isFragile, setIsFragile] = useState(box.isFragile)
  const [containerId, setContainerId] = useState(box.containerId)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      name,
      weight,
      isFlammable,
      isFragile,
      containerId,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Box name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="flammable">Is flammable:</label>
        <input
          type="checkbox"
          id="flammable"
          checked={isFlammable}
          onChange={(e) => setIsFlammable(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="fragile">Is fragile:</label>
        <input
          type="checkbox"
          id="fragile"
          checked={isFragile}
          onChange={(e) => setIsFragile(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="container">Container:</label>
        <ContainerSelect
          id="container"
          containers={containers}
          selectedContainerId={containerId}
          onSelect={setContainerId}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default BoxEditForm
