import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore, Home, Profile } from "../screens";
import navigationStrings from "../constants/navigationStrings";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

// const MaterialTab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes