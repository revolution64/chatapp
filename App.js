import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatBoxScreen from './components/screens/ChatBoxScreen';
import NameInputScreen from './components/screens/NameInputScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Enter name"
          component={NameInputScreen}
        />
        <Stack.Screen
          name="Group chat"
          component={ChatBoxScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
