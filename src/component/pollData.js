import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "./Colors";

const PollData = (props) => {
  return (
    <FlatList
      data={props.item.options}
      renderItem={({ item, index }) => (
        <View style={styles.main}>
          <Text style={styles.text1}>{index + 1}:</Text>
          <Text style={styles.text2}>{item.option}</Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colors.lightgray,
    height: 40,
    alignItems: "center",
    paddingLeft: 15,
  },
  tex1: { fontSize: 20 },
  text2: { fontSize: 20, marginLeft: 10 },
});

export default PollData;
