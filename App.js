import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatBoxScreen from "./components/ChatBoxScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import NameInputScreen from "./components/NameInputScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Enter name"
                    component={NameInputScreen}
                />
                <Stack.Screen
                    name="Group chat"
                    component={ChatBoxScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
