import React from "react";
import Container from "react-bootstrap/Container";
import Input from "../../components/Input";
import BsForm from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import useAuth from "../hooks/UseAuth";
import { Formik, Form, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateWholeUser } from "../store/authSlice";

const REQUIRED_AUTHENTICATION = {
    email: "zzelaineg@hotmail.com",
    password: "password",
};

const initialValues ={
    email: "",
    name: "",
    password:"",
};

const passwordRegex =
const LoginForm = () => {
    
};