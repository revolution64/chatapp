import {View} from "react-native";
import React from "react";
import TextInputWithButton from "../partials/TextInputWithButton";
import styles from '../styles';

const NameInputScreen = ({navigation}) => {

    const onPress = (profileName) => {
        navigation.navigate(`Group chat`, { profileName: profileName })
    }

    return <View style={styles.container}>
        <TextInputWithButton onPress={onPress}/>
    </View>;
}
export default NameInputScreen;