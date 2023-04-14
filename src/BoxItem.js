import React, { useState } from 'react'

const BoxItem = ({ box, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [weight, setWeight] = useState(box.weight)
  const [name, setName] = useState(box.name)
  const [image, setImage] = useState(box.image)
  const [isFlammable, setIsFlammable] = useState(box.isFlammable)
  const [isFragile, setIsFragile] = useState(box.isFragile)
  const [containerId, setContainerId] = useState(box.containerId)

  const handleUpdate = () => {
    onUpdate({
      ...box,
      weight,
      name,
      image,
      isFlammable,
      isFragile,
      containerId,
    })
    setIsEditing(false)
  }

  const handleDelete = () => {
    onDelete(box.id)
  }

  return (
    <li>
      {isEditing ? (
        <>
          <label>
            Weight:
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <br />
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
            Image:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <br />
          <label>
            Is flammable?
            <input
              type="checkbox"
              checked={isFlammable}
              onChange={(e) => setIsFlammable(e.target.checked)}
            />
          </label>
          <br />
          <label>
            Is fragile?
            <input
              type="checkbox"
              checked={isFragile}
              onChange={(e) => setIsFragile(e.target.checked)}
            />
          </label>
          <br />
          <label>
            Container:
            <select
              value={containerId}
              onChange={(e) => setContainerId(e.target.value)}
            >
              <option value="">-- Select a container --</option>
              {containers.map((container) => (
                <option key={container.id} value={container.id}>
                  {container.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{box.name}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  )
}

export default BoxItem
