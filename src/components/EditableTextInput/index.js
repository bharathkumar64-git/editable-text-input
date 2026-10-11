import {useState} from 'react'
import './index.css'

const EditableTextInput = () => {
  const [text, setText] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const onChangeText = event => {
    setText(event.target.value)
  }

  const onClickSave = () => {
    setIsSaved(true)
  }

  const onClickEdit = () => {
    setIsSaved(false)
  }

  return (
    <div className="main-container">
      <div className="card-container">
        <h1 className="heading">Editable Text Input</h1>

        {!isSaved ? (
          <div className="input-container">
            <input
              type="text"
              value={text}
              onChange={onChangeText}
              className="text-input"
            />

            <button type="button" className="save-button" onClick={onClickSave}>
              Save
            </button>
          </div>
        ) : (
          <div className="saved-container">
            <p className="saved-text">{text}</p>

            <button type="button" className="edit-button" onClick={onClickEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditableTextInput
