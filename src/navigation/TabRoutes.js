import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore, Home, Profile } from "../screens";
import navigationStrings from "../constants/navigationStrings";
import { MaterialIcons } from "@expo/vector-icons";

// const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

// const MaterialTab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        presentation: "modal",
        tabBarActiveTintColor: "lightseagreen",
        tabBarInactiveTintColor: "grey",
        tabBarStyle:{
            backgroundColor: 'rgba(0,0,0,0.1)',
            position: 'absolute',
            borderRadius: '50%'
        }
      }}
    >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialIcons
                name="home"
                size={35}
                color={focused ? color : color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialIcons
                name="person"
                size={35}
                color={focused ? color : color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.EXPLORE}
        component={Explore}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <MaterialIcons
                name="explore"
                size={35}
                color={focused ? color : color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
