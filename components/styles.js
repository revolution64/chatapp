import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chatInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: 'white',
    width: "100%",
    alignSelf: "stretch"
  },
  inputText: {
    color: "blue"
  },
  inputField: {
    height: 50,
    backgroundColor: '#fff', // White background
    borderWidth: 1, // Thin black border
    borderColor: '#000', // Black border color
    borderRadius: 20, // Adjust border radius as needed
    paddingLeft: 15,
    fontSize: 16,
    color: '#000',
    marginRight: 16,
    marginBottom: 16,
    minWidth: 200
  },
  chatBox: {
    flex: 3,
    width: "100%",
    borderBottomColor: "black",
    borderWidth: 1,
    marginTop: 50
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    height: 50,
    backgroundColor: '#FF5722', // Orange background
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    flexDirection: "row"
  },
  author: {
    color: "blue"
  }

});

export default styles;