import React from 'react';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('TrackDetail')}>
        <Text>TrackDetail</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});

export default TrackListScreen;
