import React from "react";

import t from "tcomb-form-native";
import formValidation from "../utils/Validation";
import inputTemplate from "./templates/Input";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      label: "Nombre (*)",
      placeholder: "Escribe un nombre y apellido",
      error: "Nombre invalido",
      template: inputTemplate
    },
    email: {
      label: "Email (*)",
      placeholder: "Escribe un email",
      error: "Email invalido"
    },
    password: {
      label: "Contraseña (*)",
      placeholder: "Escribe una contraseña",
      error: "Contraseña invalida",
      password: true,
      secureTextEntry: true
    },
    passwordConfirmation: {
      label: "Repetir contraseña (*)",
      placeholder: "Repite una contraseña",
      error: "Contraseña invalida",
      password: true,
      secureTextEntry: true
    }
  }
};
