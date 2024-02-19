import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    shadowColor: "#333", 
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#4CAF50", 
},
container: {
    flex: 1,
    backgroundColor: '#333333', 
    alignItems: 'center',
},
textContainer: {
    backgroundColor: "#333333",
    width: "100%",
    padding: 20,
    paddingTop: 40,
    color: "#ffffff", 
    justifyContent: "flex-end",
    alignItems: "flex-end",
},
text: {
    fontSize: 40,
    fontWeight: "bold",
},
buttonsContainer: {
    backgroundColor: "#444444", 
    flex: 1,
    justifyContent: "center",
},
buttons: {
    marginTop: 20,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-around",
    padding: 15,
},
textInput: {
    fontSize: 30,
    textAlign: 'right',
    padding: 10,
    width: "80%",
    backgroundColor: "#555555", 
    borderRadius: 8,
    marginBottom: 20,
    color: "#ffffff", 
}
});