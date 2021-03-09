import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../component/Colors";

const UpdateModal = (props) => {
  const [text, setText] = useState(props.title);
  const user = {
    id: props.id,
    title: text,
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.open}
        onRequestClose={() => {
          setModalVisible(!props.open);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textArea}
              value={text}
              onChangeText={(e) => setText(e)}
            />
            <View style={styles.flex}>
              <TouchableOpacity style={styles.btn}>
                <Text
                  style={{ fontSize: 20 }}
                  onPress={() => {
                    props.updatePoll(user);
                    props.setOpen(false);
                  }}
                >
                  Done
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text
                  style={{ fontSize: 20 }}
                  onPress={() => props.setOpen(false)}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {props.isLoading ? (
          <ActivityIndicator size="small" color={Colors.red} />
        ) : null}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 340,
    height: 250,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textArea: {
    height: 100,
    width: 280,
    borderRadius: 10,
    backgroundColor: Colors.sparkBlue,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    marginTop: 30,
  },
});

export default UpdateModal;
