import React from 'react'
import Form from "react-bootstrap/Form";
import { useField } from “formik”;



const Input = ({value, onChange, id, type = "text", ...rest}) => {
  const handelChange = (event) => {
    const value = event.target.value;

    onChange(value,id);
  }

  return  <input id= {id} value ={value} type ={type} onChange={handleChange} {...rest}/>;
  
};

export default Input