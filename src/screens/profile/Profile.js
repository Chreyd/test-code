import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderComponent from "../../components/HeaderComponent";

const Profile = ({ navigation, route }) => {

  return (
    <View>
      <SafeAreaView>
      <HeaderComponent
          text="go back"
          // goBack={()=>navigation.goBack()}
        />
        <Text>Profile</Text>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
