import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ImageBackground } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles, logingradient } from "../styles";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../styles/colors";

export default function Login() {
  return (
    // <LinearGradient
    //   colors={logingradient}
    //   start={{ x: 0, y: -0.25 }}
    //   end={{ x: 1, y: 0.95 }}
    //   style={styles.rootcontainer}
    // >
    <ImageBackground source={require("../assets/images/background.png")} style={{...styles.rootcontainer, resizeMode: 'cover'}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.rootcontainer}>
          <View style={{...styles.inputcontainer, flex: 1}}>
            <Image
              style={styles.logoimage}
              source={require("../assets/images/white-logo.png")}
              contentFit="cover"
            />
            <Text style={styles.slidertitle}>EmanciTech</Text>
          </View>
          <View style={{...styles.inputcontainer, flex: 2}}>
            <Ionicons style={styles.inputlefticon} name="key-outline" size={20} color="white" />
            <TextInput style={styles.input} placeholder="Type something here" placeholderTextColor="rgba(255, 255, 255, 0.5)" />
            <Ionicons style={styles.inputrighticon} name="eye" size={20} color={colors.green} />
          </View>
          <View style={{...styles.inputcontainer, flex: 1}}>
            <Image
              style={styles.logoimage}
              source={require("../assets/images/white-logo.png")}
              contentFit="cover"
            />
            <Text style={styles.slidertitle}>EmanciTech</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
    // </LinearGradient>
  );
}
