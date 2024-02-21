import { StyleSheet, Platform, PixelRatio } from "react-native";
import { colors } from "./colors";
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
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slidertitle: {
    fontFamily: 'Brolink-Regular',
    fontSize: getFontSize(30),
    color: colors.white,
    textAlign: 'center',
    lineHeight: 35
  },
  sliderimage: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
    marginVertical: 32,
  },
  slidertext: {
    fontFamily: 'Informe-Regular',
    fontSize: getFontSize(18),
    color: colors.white,
    textAlign: 'center',
    lineHeight: 28,
  },
  sliderbutton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
