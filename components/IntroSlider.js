import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/images/icon.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/images/icon.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/images/icon.png"),
    backgroundColor: "#22bcb5",
  },
];

export default function IntroSlider() {

  renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  // AppIntroSlider Options: bottomButton, showSkipButton, showPrevButton

  return (
    <AppIntroSlider renderItem={renderItem} data={slides} onDone={() => {}} showPrevButton />
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
