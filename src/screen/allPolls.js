import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { getPolls } from "../redux/action/action";
import PollData from "../component/pollData";
import { Colors } from "../component/Colors";

const AllPolls = (props) => {
  useEffect(() => {
    props.getPolls();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome name="bars" size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>All Polls</Text>
      </View>

      <FlatList
        data={props.allPolls}
        contentContainerStyle={{}}
        renderItem={({ item, index }) => (
          <View>
            <View style={styles.data}>
              <Text style={styles.text1}>{index + 1}:</Text>
              <Text style={styles.text2}>{item.title}</Text>
            </View>
            <PollData item={item} />
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
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
    paddingLeft: 15,
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
});

const mapStateToProps = (state) => {
  return {
    allPolls: state.GetPoll.data,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    getPolls: () => dispatch(getPolls()),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(AllPolls);
