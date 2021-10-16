import React from 'react'
import useInput from '../../customhook/useInput'

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const handleSubmit = (e) => {
    e.preventDefault();
    resetTitle();
    resetContent();
  }

  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-dark-3">New Note</h5>
      </form>

      <div className="input-field">
        <input id="note-title" type="text" className="validate" {...bindTitle} />
        <label htmlFor="note-title">Note Title</label>
      </div>

      <div className="input-field">
        <textarea id="note-content" className="materialize-textarea"{...bindContent}></textarea>
        <label htmlFor="note-content">NoteContent</label>
      </div>
      <button className="btn green">Add</button>
    </div >
  )
}

export default Form
