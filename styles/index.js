import { StyleSheet, Platform } from "react-native";
import { theme } from "./theme";

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
    fontSize: 15,
    color: theme.light.text,
  },
  darktext: {
    fontSize: 15,
    color: theme.dark.text,
  },
});
