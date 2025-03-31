import { useState } from 'react'

export const useEditableToggle = () => {
  const [editable, setEditable] = useState(false)

  const toggleEditable = () => {
    setEditable((prev) => !prev)
  }

  const buttonText = editable ? 'CANCEL' : 'EDIT'

  return {
    editable,
    buttonText,
    toggleEditable
  }
}
