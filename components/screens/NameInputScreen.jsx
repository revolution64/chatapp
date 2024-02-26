import { View } from 'react-native';
import React from 'react';
import TextInputWithButton from '../partials/TextInputWithButton';
import styles from '../styles';

function NameInputScreen({ navigation }) {
  const onPress = (profileName) => {
    navigation.navigate('Group chat', { profileName });
  };

  return (
    <View style={styles.container}>
      <TextInputWithButton onPress={onPress} />
    </View>
  );
}
export default NameInputScreen;
