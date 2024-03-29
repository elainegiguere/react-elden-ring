import React, { useEffectuseState } from "react";
import Container from "react-bootstrap/Container";
import Input from "../../components/Input";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useAuth from "../hooks/UseAuth";
import BsForm from "react-bootstrap/Form";
import { Formik, Form } from "formik";
///// Rendu ici à l'étape 4 du login form. Suivre avec le la documentation et les formulaire du git du prof.
const REQUIRED_AUTHENTICATION = {
  email: "elaine.giguere@cegeptr.qc.ca",
  password: "such-password",
};

const initialValues = { email: "", password: "" };

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

//   c'est ici le navigate avec la route
  const auth = useAuth(); 

  const onChange = (newValue, id) => {
    setFormData({
      ...formData,
      [id]: newValue,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formDataValuesMatchRequiredAuth = Object.entries(formData).every(
      ([key, value]) => REQUIRED_AUTHENTICATION[key] === value
    );
    if (formDataValuesMatchRequiredAuth) {
      auth();
    }
  };

  return (
    <Container fluid className="vh-100">
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Input id="email" onChange={onChange} value={formData.email} />
            </Col>
            <Col>
              <Input
                id="password"
                onChange={onChange}
                value={formData.password}
                type="password"
              />
            </Col>
            <Col>
              <Button type="submit">Connexion</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  );
};

export default LoginForm;