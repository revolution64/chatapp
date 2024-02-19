import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatInput from './components/ChatInput';
import ChatBox from "./components/ChatBox";

export default function App() {

  const [messages, setMessages] = useState([`firstMessage`])

  return (

    <View style={styles.container}>
      <StatusBar/>
      <ChatBox messages={messages}/>
      <ChatInput messages={messages} setMessages={setMessages}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
