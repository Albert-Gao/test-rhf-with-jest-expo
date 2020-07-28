import React from "react";
import { Text, Button, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App({ mock }) {
  const { errors, control, handleSubmit } = useForm({
    defaultValues: { name: "" },
  });

  const errorText = errors["name"]?.message;
  const isError = Boolean(errorText);

  const onSubmit = handleSubmit(async ({ name }) => {
    mock(name);
  });

  return (
    <View style={{ margin: 10 }}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{ borderColor: "black" }}
            testID="nameInput"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        rules={{ required: "name can't be blank" }}
        name="name"
      />

      {isError && <Text testID="nameErrorText">{errorText}</Text>}

      <Button testID="submitButton" title="submit" onPress={onSubmit} />
    </View>
  );
}
