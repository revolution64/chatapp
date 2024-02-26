import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ChatBox from "./ChatBox";
import NameInputScreen from "./NameInputScreen";

const StackNavigator = createStackNavigator(
    {
        initialRouteName: "NameInput"
    },
    {
        Home: {
            screen: NameInputScreen
        },
        ChatBox: {
            screen: ChatBox,
            headerMode: "none",

        }
    });

export default createAppContainer(StackNavigator);