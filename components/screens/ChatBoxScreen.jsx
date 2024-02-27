import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ChatBox from '../chatbox/ChatBox';
import TextInputWithButton from '../partials/TextInputWithButton';
import styles from '../styles';
import { event } from '../../socket/event';

function ChatBoxScreen({ route }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const onChatMessageReceived = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    event.on('MESSAGE_RECEIVED', onChatMessageReceived);

    return () => {
      event.off('MESSAGE_RECEIVED', onChatMessageReceived);
    };
  }, [setMessages]);

  const onChatMessageSent = (inputValue) => {
    setMessages([...messages, { username: 'You', message: inputValue }]);
    event.emit('SEND_MESSAGE', inputValue);
  };

  return (
    <View style={styles.container}>
      <ChatBox profileName={route.params.profileName} messages={messages} />
      <TextInputWithButton onPress={onChatMessageSent} />
    </View>
  );
}

export default ChatBoxScreen;
