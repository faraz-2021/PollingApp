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
import UpdateModal from "../component/updateModal";

const AllPolls = (props) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.getPolls();
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
    setModalVisible(id);
    setTitle(title);
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
                <Text style={styles.text1}>{index + 1}:</Text>
                <TouchableOpacity
                  onPress={() => {
                    setOpen(true);
                    handleCLick(item._id, item.title);
                  }}
                >
                  <Text style={styles.text2}>{item.title}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => deleteAlert(item._id)}
                >
                  <Material name="delete" size={30} color={Colors.Blue} />
                </TouchableOpacity>
              </View>

              <PollData item={item} />
            </View>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
      {open ? (
        <UpdateModal
          id={id}
          title={title}
          updatePoll={props.updatePoll}
          setOpen={setOpen}
          open={open}
          isLoading={props.isLoading}
        />
      ) : null}
      {props.Loading ? (
        <ActivityIndicator size="small" color={Colors.red} />
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
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(AllPolls);
