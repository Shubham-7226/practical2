import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Option3 = props => {
  return (
    <View style={styles.screen}>
      <Text>In option3</Text>
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

export default Option3;
