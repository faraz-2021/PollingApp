import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { Colors } from "../component/Colors";
import { connect } from "react-redux";
import { addPoll } from "../redux/action/action";

const AddPolls = (props) => {
  const [poll, setPoll] = useState("");
  const [text, setText] = useState("");
  const [option, setOption] = useState([]);

  const user = {
    title: poll,
    options: option,
  };

  const addOption = () => {
    if (text) {
      setOption(() => {
        return [...option, { title: text, id: Math.random().toString() }];
      });
    } else {
      alert("option cant be empty");
    }
  };

  const clearOption = (id) => {
    var filtered = option.filter((e) => e.id != id);
    setOption(filtered);
  };

  return (
    <View style={styles.flex}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome name="bars" size={30} color={Colors.white} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: Colors.white }}>Add poll</Text>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            style={styles.textarea}
            onChangeText={(e) => setPoll(e)}
            value={poll}
          />
        </View>
        <View>
          <FlatList
            data={option}
            contentContainerStyle={{}}
            renderItem={({ item }) => (
              <View>
                <View style={styles.data}>
                  <Text style={styles.text2}>{item.title}</Text>
                  <TouchableOpacity>
                    <Entypo
                      name="cross"
                      size={30}
                      onPress={() => clearOption(item.id)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 20,
          }}
        >
          <TextInput
            placeholder="Option"
            style={styles.textInput}
            value={text}
            onChangeText={(e) => setText(e)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addOption();
              setText(null);
            }}
          >
            <Text style={styles.btn}>ADD OPTION</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row-reverse" }}>
          <TouchableOpacity
            style={styles.AddBtn}
            onPress={() => props.addPoll(user)}
          >
            <Text style={styles.btn}>ADD POLL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#23395d",
  },
  textareaContainer: {
    height: 180,
    width: 350,
    padding: 5,
    backgroundColor: "#F5FCFF",
  },
  textarea: {
    textAlignVertical: "top",
    fontSize: 14,
    color: "#333",
    height: 180,
    width: 350,
    padding: 5,
    backgroundColor: "#F5FCFF",
  },
  button: {
    backgroundColor: "#23395d",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.lightgray,
    width: 200,
  },
  btn: {
    color: Colors.white,
  },
  AddBtn: {
    backgroundColor: "#23395d",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    marginRight: 20,
  },
  data: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const mapdispatchToProps = (dispatch) => {
  return {
    addPoll: (user) => dispatch(addPoll(user)),
  };
};
export default connect(null, mapdispatchToProps)(AddPolls);
