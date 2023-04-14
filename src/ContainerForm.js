import React, { useState } from 'react'

const ContainerForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [maxWeight, setMaxWeight] = useState('')
  const [boxes, setBoxes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContainer = {
      name,
      maxWeight,
      boxes,
    }
    onSubmit(newContainer)
    setName('')
    setMaxWeight('')
    setBoxes([])
  }

  const handleBoxChange = (e) => {
    const boxIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    )
    setBoxes(boxIds)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Max weight:
        <input
          type="number"
          value={maxWeight}
          onChange={(e) => setMaxWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Boxes:
        <select multiple onChange={handleBoxChange}>
          {boxes.map((box) => (
            <option key={box.id} value={box.id}>
              {box.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button disabled={!name || !maxWeight}>Create container</button>
    </form>
  )
}

export default ContainerForm
