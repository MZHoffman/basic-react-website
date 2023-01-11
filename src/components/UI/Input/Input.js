import React from 'react'

import classes from './Input.module.css'

const Input = (props) => {
  //console.log(props.isValid)
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <input
        type={props.type || 'text'}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export default Input
