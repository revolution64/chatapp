import {
  TextInput, Text, View, TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import styles from '../styles';

function TextInputWithButton({ onPress, buttonLabel = 'Submit' }) {
  const [inputValue, setInputValue] = useState();

  return (
    <View {...{ style: styles.chatInputContainer }}>
      <View style={styles.buttonGroup}>
        <TextInput {...{
          style: styles.inputField,
          placeHolder: 'Hello world',
          onChangeText: setInputValue,
          value: inputValue,
        }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setInputValue('');
            onPress(inputValue);
          }}
        >
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

export default TextInputWithButton;
