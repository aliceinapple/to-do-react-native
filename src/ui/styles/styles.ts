import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
    alignItems: "center",
    paddingTop: "10%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "10%",
  },
  block: {
    backgroundColor: colors.transparentWhite,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 6,
    shadowColor: colors.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  item: {
    backgroundColor: colors.white,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  itemEdit: {
    backgroundColor: colors.lightblue,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  itemCompleted: {
    backgroundColor: colors.transparentWhite,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  title: {
    color: colors.white,
    fontSize: 40,
    fontWeight: "600",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.transparent,
  },
  disabledButton: {
    opacity: 0.5,
  },
  primaryButton: {
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
  },
  buttonText: {
    marginLeft: 5,
    color: "white",
  },
  input: {
    flexGrow: 1,
    alignSelf: "stretch",
    padding: 10,
    borderColor: colors.transparent,
    borderWidth: 1,
    fontSize: 20,
    fontWeight: "600",
  },
  inputEdit: {
    backgroundColor: colors.white,
    borderRadius: 6,
    fontWeight: "600",
  },
});
