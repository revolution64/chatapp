import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import styles from '../styles';

function ChatBox({ messages }) {
  const messageComponents = messages.map(
    ({ username, message }, index) => (
      <View style={styles.chatMessage} key={index}>
        <Text style={username === 'You' ? styles.author : styles.otherAuthor}>
          {username}
          :
          {' '}
        </Text>
        <Text>{message}</Text>
      </View>
    ),
  );

  return (
    <View {...{ style: styles.chatBox }}>
      <ScrollView>
        {messageComponents}
      </ScrollView>
    </View>
  );
}

export default ChatBox;
