import React, { useState } from "react";
import { View } from "react-native";

export default function Signup () {
    const[text,setText] = useState('')
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => setText(e)}
        value={text}
      />
    </View>
  );
};
