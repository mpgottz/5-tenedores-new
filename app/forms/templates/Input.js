import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon } from "react-native-elements";

export default inputTemplate = locals => {
  return (
    <View style={styles.ViewContainer}>
      <Input
        placeholder={locals.config.placeholder}
        password={locals.config.password}
        secureTextEntry={locals.config.secureTextEntry}
        rightIcon={
          <Icon
            type={locals.config.iconType}
            name={locals.config.iconName}
            size={24}
            color="black"
          />
        }
        onChangeText={value => locals.onChange(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewContainer: {
    marginTop: 12,
    marginBottom: 12
  }
});
