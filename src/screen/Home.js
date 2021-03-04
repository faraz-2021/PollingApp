import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Feather from "react-native-vector-icons/Feather";
import { connect } from "react-redux";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function AddUser() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add User</Text>
    </View>
  );
}
function AllUser() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>All User</Text>
    </View>
  );
}
function AddPolls() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add Polls</Text>
    </View>
  );
}
function AllPolls(props) {
  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Login");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>All Polls</Text>
      <TouchableOpacity onPress={clearAsyncStorage} style={styles.button}>
        <Text>sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.drawer}>
        <View>
          <View style={styles.profile}>
            <Feather name="user" size={25} />
            <Text style={styles.text}> Hello, </Text>
            <Text style={styles.textAdmin}> {props.user} </Text>
          </View>
          <View>
            <DrawerItem
              label="Add User"
              onPress={() => props.navigation.navigate("AddUser")}
            />
            <DrawerItem
              label="All Users"
              onPress={() => props.navigation.navigate("AllUser")}
            />
            <DrawerItem
              label="Add Poll"
              onPress={() => props.navigation.navigate("AddPoll")}
            />
            <DrawerItem
              label="All Polls"
              onPress={() => props.navigation.navigate("AllPoll")}
            />
          </View>
        </View>

        <View style={styles.signout}>
          <DrawerItem label="Sign Out" onPress={props.clearAsyncStorage} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

const Home = (props) => {
  const [name, setName] = useState();

  useEffect(() => {
    (async () => {
      const id = await AsyncStorage.getItem("user");
      setName(id);
    })();
  }, []);
  console.log(name, "userrrrrr");

  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Login");
  };

  return (
    <Drawer.Navigator
      drawerContent={() => (
        <CustomDrawerContent
          user={name}
          clearAsyncStorage={clearAsyncStorage}
          navigation={props.navigation}
        />
      )}
    >
      <Drawer.Screen name="Feed" component={Feed} />

      <Drawer.Screen name="AddUser" component={AddUser} />
      <Drawer.Screen name="AllUser" component={AllUser} />
      <Drawer.Screen name="AddPoll" component={AddPolls} />
      <Drawer.Screen name="AllPoll" component={AllPolls} />
    </Drawer.Navigator>
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
  signout: {},
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.LoginReducer.isLoading,
    isSuccess: state.LoginReducer.isSuccess,
    user: state.LoginReducer.data.user,
  };
};
export default connect(mapStateToProps)(Home);
