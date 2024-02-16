import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import navigationStrings from "../../constants/navigationStrings";
import HeaderComponent from "../../components/HeaderComponent";

const Home = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>

        <Text>Home</Text>
        <Button
          title="go to Profile"
          onPress={() =>
            navigation.navigate(navigationStrings.PROFILE, {
              title: "pastteque",
            })
          }
        />
                <Button
          title="go to SEARCH  screen"
          onPress={() =>
            navigation.navigate(navigationStrings.SEARCH, {
              title: "pastteque",
            })
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
