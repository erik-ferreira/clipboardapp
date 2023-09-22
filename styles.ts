import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,

    padding: 32,
    backgroundColor: "#121214",
  },

  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#323238",
    padding: 16,
    borderRadius: 5,
    color: "#FFF",
  },

  options: {
    flexDirection: "row",
    gap: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#8257e5",

    alignItems: "center",
    justifyContent: "center",
  },
})
