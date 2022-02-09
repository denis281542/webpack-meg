import React, {useState} from "react";

export const Input = ({input, setEmpty, onChange, value, isError}) => {
  const [dirty, setDitry] = useState(false)
  // const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const errorHandler = () => {
    if(dirty && value === '') {
      isError = true
      console.log(isError);
    }
    return (dirty && value === '') ? 'hide invalid' : 'hide'
  }

  const onBlur = () => {
    setDitry(true)
    if(value === '') {
      setError(true)
    } else {
      setError(false)
      setEmpty(false)
    }
  }

  return(
    <div className="modal__field">
      <label htmlFor={input.htmlFor}>{input.label}</label>
      <input 
        onFocus={() => setDitry(false)}
        onBlur={onBlur}
        onChange={e => onChange(e)}
        value={input.value}
        type={input.type}
        name={input.htmlFor}
      />
      <small className={errorHandler()}>{input.error}</small>
    </div>
  )
}