import React from 'react'

function Form() {
  return (
    <div>
      just be happy
      <label htmlFor="">input</label>
<input list='data' type="text" />

<datalist id='data'>
  <option >one</option>
  <option >two</option>
  <option >three</option>
</datalist>
    </div>
  )
}

export default Form