import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import styles from '../styles';

function ChatBox({ messages, profileName = 'Seppe' }) {
  const messageComponents = messages.map(
    (message, index) => (
      <View style={styles.chatMessage} key={index}>
        <Text style={styles.author}>
          {profileName}
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
