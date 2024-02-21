import { Text, View, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../styles/colors";
import { styles } from '../styles';

const slides = [
  {
    key: 1,
    title: "EmanciTech",
    text: "The Goal Of Technology Existence",
    image: require("../assets/images/slide-1.gif"),
    backgroundColor: colors.red,
  },
  {
    key: 2,
    title: "WebSite",
    text: "Accelerate your business with website",
    image: require("../assets/images/slide-2.gif"),
    backgroundColor: colors.purple,
  },
  {
    key: 3,
    title: "Application",
    text: "Mobile Application Development",
    image: require("../assets/images/slide-3.gif"),
    backgroundColor: colors.green,
  },
];

export default function IntroSlider() {

  renderItem = ({ item }) => {
    return (
      <View style={[styles.center, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.slidertitle}>{item.title}</Text>
        <Image style={styles.sliderimage} source={item.image} />
        <Text style={styles.slidertext}>{item.text}</Text>
      </View>
    );
  };

  renderNextButton = () => {
    return (
      <View style={styles.sliderbutton}>
        <Ionicons
          name="arrow-forward"
          color="rgba(255, 255, 255, 0.9)"
          size={24}
        />
      </View>
    );
  };

  renderPrevButton = () => {
    return (
      <View style={styles.sliderbutton}>
        <Ionicons
          name="arrow-back"
          color="rgba(255, 255, 255, 0.9)"
          size={24}
        />
      </View>
    );
  };

  renderDoneButton = () => {
    return (
      <View style={styles.sliderbutton}>
        <Ionicons 
          name="checkmark" 
          color="rgba(255, 255, 255, 0.9)" 
          size={24}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider 
      renderItem={renderItem} 
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderPrevButton={renderPrevButton}
      dotStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      activeDotStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
      data={slides} 
      onDone={() => {}} 
      showPrevButton />
  );
}
