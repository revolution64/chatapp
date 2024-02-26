import {ScrollView, TextInput, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import styles from '../styles';
import {useState} from "react";

const TextInputWithButton = ({onPress, buttonLabel = `Submit`}) => {

    const [inputValue, setInputValue] = useState();

    return (
        <View {...{style: styles.chatInputContainer}}>
            <View style={styles.buttonGroup}>
                <TextInput {...{
                    style: styles.inputField,
                    placeHolder: "Hello world",
                    onChangeText: setInputValue,
                    value: inputValue
                }}/>
                <TouchableOpacity style={styles.button} onPress={() => {
                    setInputValue("");
                    onPress(inputValue);
                }}>
                    <Text style={styles.buttonText}>{buttonLabel}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default TextInputWithButton;