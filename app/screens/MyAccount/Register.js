import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";

const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

export default class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      }
    };
  }

  register = () => {
    const { password, passwordConfirmation } = this.state.formData;

    if (password === passwordConfirmation) {
      console.log("Contraseñas iguales");
      const validate = this.refs.registerForm.getValue();
      if (validate) {
        console.log("Formulario Correcto");
      } else {
        console.log("Formulario incorrectos");
      }
    } else {
      console.log("Contraseñas no son iguales");
    }

    //console.log(this.state.formData);
  };

  onChangeFormRegister = formValue => {
    this.setState({
      formData: formValue
    });
    //console.log(this.state.formData);
  };

  render() {
    const { registerStruct, registerOptions } = this.state;

    return (
      <View style={styles.viewBody}>
        <Form
          ref="registerForm"
          type={registerStruct}
          options={registerOptions}
          value={this.state.formData}
          onChange={formValue => this.onChangeFormRegister(formValue)}
        />
        <Button title="Registrar" onPress={() => this.register()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  }
});
