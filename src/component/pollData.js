import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { deleteOption } from "../redux/action/action";
import { connect } from "react-redux";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "./Colors";
import { addVote } from "../redux/action/action";

const PollData = (props) => {
  const handleCLick = (option) => {
    const user = {
      id: props.item._id,
      option: option,
    };
    props.deleteOption(user);
  };
  const onClick = async (option) => {
    const user = {
      id: props.item._id,
      option: option,
    };
    props.addVote(user);
  };

  return (
    <View>
      <FlatList
        data={props.item.options}
        renderItem={({ item, index }) => (
          <View style={styles.flex}>
            <View style={styles.main}>
              <Text style={styles.text1}>{index + 1}:</Text>
              <Text style={styles.text2}>{item.option}</Text>
            </View>
            <View style={styles.flex1}>
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => onClick(item.option)}
              >
                <Material
                  name="checkbox-blank-circle-outline"
                  size={30}
                  color={Colors.green}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => handleCLick(item.option)}
              >
                <Material name="delete" size={30} color={Colors.Blue} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {props.isLoading ? (
        <ActivityIndicator size="small" color={Colors.red} />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: "row",

    height: 40,
    alignItems: "center",
    paddingLeft: 15,
  },
  tex1: { fontSize: 20 },
  text2: { fontSize: 20, marginLeft: 10 },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Colors.lightgray,
  },
  flex1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.DeleteOption.data,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    deleteOption: (user) => dispatch(deleteOption(user)),
    addVote: (user) => dispatch(addVote(user)),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(PollData);
