import {ScrollView, TextInput, Text, View, Button, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useState} from "react";

const ChatInput = ({messages, setMessages}) => {

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
                    setMessages([...messages, inputValue])
                }}>
                    <Text style={styles.buttonText}>Press Me</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChatInput;