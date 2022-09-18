import React from 'react'
import Form from "react-bootstrap/Form";
import { useField } from "formik";
import { FormControl, FormLabel } from 'react-bootstrap';



const Input = ({label, id, type = "text", ...rest}) => {
  const [field, meta] = useField(id);
  const isError = meta.touched && meta.error;
   

  return (
<Form.FormGroup>
  {label && <Form.Label>{label}</Form.Label>}
   <Form.Control 
    isInvalid={isError}
    type ={type} {...field} {...rest}/>

   { isError && (
   <Form.Control.Feedback>{meta.error}</Form.Control.Feedback>
   )}
   </Form.FormGroup>
   );
};

export default Input