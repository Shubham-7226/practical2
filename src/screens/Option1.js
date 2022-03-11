import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Option1 = props => {
  return (
    <View style={styles.screen}>
      <Button
        title="Take me to second Screen"
        onPress={() => {
          props.navigation.navigate('Screen2');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Option1;
