import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { getPolls } from "../redux/action/action";
import PollData from "../component/pollData";
import { Colors } from "../component/Colors";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { deletePoll } from "../redux/action/action";
import { updatePoll } from "../redux/action/action";
import { deleteOption } from "../redux/action/action";
import UpdateModal from "../component/updateModal";
import Ion from "react-native-vector-icons/Ionicons";
import AddOptionModal from "../component/addOptionModal";

const AllPolls = (props) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    props.getPolls();
    (async () => {
      const role1 = await AsyncStorage.getItem("role");
      setRole(role1);
    })();
  }, []);

  const deleteAlert = (id) => {
    Alert.alert(
      "Delete Poll",
      "Confirm Delete",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => props.deletePoll(id) },
      ],
      { cancelable: false }
    );
  };

  const handleCLick = (id, title) => {
    setId(id);
    setTitle(title);
  };

  const OnClick = (id) => {
    setId(id);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome name="bars" size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>All Polls</Text>
        {props.isLoading ? (
          <ActivityIndicator size="small" color={Colors.red} />
        ) : null}
      </View>
      <View>
        <FlatList
          data={props.allPolls}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.data}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.text1}>{index + 1}:</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setOpen1(true);
                      handleCLick(item._id, item.title);
                    }}
                  >
                    <Text style={styles.text2}>{item.title}</Text>
                  </TouchableOpacity>
                </View>

                {role == "admin" ? (
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{ marginRight: 20 }}
                      onPress={() => {
                        setOpen(true);
                        OnClick(item._id);
                      }}
                    >
                      <Ion name="add-circle" size={30} color={Colors.Blue} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ marginRight: 20 }}
                      onPress={() => deleteAlert(item._id)}
                    >
                      <Material name="delete" size={30} color={Colors.Blue} />
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>

              <PollData item={item} />
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      {open1 && role == "admin" ? (
        <UpdateModal
          id={id}
          title={title}
          updatePoll={props.updatePoll}
          setOpen1={setOpen1}
          open1={open1}
          isLoading={props.isLoading}
        />
      ) : null}
      {props.Loading ? (
        <ActivityIndicator size="small" color={Colors.red} />
      ) : null}
      {open ? (
        <AddOptionModal
          setOpen={setOpen}
          open={open}
          OnClick={OnClick}
          id={id}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textAdmin: { fontWeight: "bold", fontSize: 20 },
  text: { fontSize: 20 },
  profile: {
    flexDirection: "row",
    borderBottomWidth: 1,
    minHeight: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    margin: 5,
  },
  drawer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: Constants.statusBarHeight,
  },
  data: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    backgroundColor: Colors.lightgray,
    paddingLeft: 20,
    justifyContent: "space-between",
  },

  list: {
    justifyContent: "center",
    alignItems: "center",
  },
  text1: { fontSize: 20, fontWeight: "bold", color: Colors.Blue },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: Colors.Blue,
  },
  innerView: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    allPolls: state.GetPoll.data,
    Loading: state.GetPoll.isLoading,
    isLoading: state.DeletePoll.isLoading,
    isLoading: state.UpdatePoll.isLoading,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    getPolls: () => dispatch(getPolls()),
    deletePoll: (user) => dispatch(deletePoll(user)),
    updatePoll: (user) => dispatch(updatePoll(user)),
    deleteOption: (user) => dispatch(deleteOption(user)),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(AllPolls);
