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
import { GetUser } from "../redux/action/action";

const AllUser = (props) => {
  useEffect(() => {
    props.get();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <FontAwesome name="bars" size={30} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>All User</Text>
      </View>
      <FlatList
        data={props.data}
        contentContainerStyle={styles.list}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.data}>
            <Text>{item.username}</Text>
            <Text>{item.role}</Text>
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
    height: 100,
    width: 200,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.GetUser.data,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    get: () => dispatch(GetUser()),
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(AllUser);
