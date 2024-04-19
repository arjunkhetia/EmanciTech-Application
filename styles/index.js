import { StyleSheet, Platform, PixelRatio } from "react-native";
import { colors } from "./colors";
import { theme } from "./theme";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const logingradient = [colors.gradient_blue, colors.gradient_pink];

export const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rootlightcontainer: {
    flex: 1,
    backgroundColor: theme.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
  rootdarkcontainer: {
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
    fontFamily: "Brolink-Regular",
    fontSize: getFontSize(30),
    color: colors.white,
    textAlign: "center",
    lineHeight: 35,
  },
  sliderimage: {
    width: 320,
    height: 320,
    resizeMode: "contain",
    marginVertical: 32,
  },
  slidertext: {
    fontFamily: "Informe-Regular",
    fontSize: getFontSize(18),
    color: colors.white,
    textAlign: "center",
    lineHeight: 28,
  },
  sliderbutton: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  logoimage: {
    width: 50,
    height: 50,
  },
  inputcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    paddingLeft: 40,
    paddingRight: 35,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 15,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: colors.dark_text,
  },
  inputlefticon: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 5,
    marginRight: -35,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  inputrighticon: {
    marginLeft: -30,
  },
});
