import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import ChatBox from '../chatbox/ChatBox';
import TextInputWithButton from '../partials/TextInputWithButton';
import styles from '../styles';

function ChatBoxScreen({ route }) {
  const [messages, setMessages] = useState(['firstMessage']);

  const onChatMessageSent = (inputValue) => setMessages([...messages, inputValue]);

  return (
    <View style={styles.container}>
      <ChatBox profileName={route.params.profileName} messages={messages} />
      <TextInputWithButton onPress={onChatMessageSent} />
    </View>
  );
}
export default ChatBoxScreen;
