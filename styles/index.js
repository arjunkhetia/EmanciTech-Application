import { StyleSheet, Platform, PixelRatio } from "react-native";
import { theme } from "./theme";

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export const styles = StyleSheet.create({
  lightcontainer: {
    flex: 1,
    backgroundColor: theme.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
  darkcontainer: {
    flex: 1,
    backgroundColor: theme.dark.background,
    alignItems: "center",
    justifyContent: "center",
  },
  lighttext: {
    // fontFamily: 'Brolink-Regular',
    // fontFamily: Platform.select({
    //   android: 'Brolink-Regular',
    //   ios: 'Brolink-Outline',
    // }),
    fontSize: getFontSize(20),
    color: theme.light.text,
  },
  darktext: {
    fontSize: getFontSize(20),
    color: theme.dark.text,
  },
});
