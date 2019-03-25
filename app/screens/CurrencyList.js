import React from 'react';
import {
  Text, FlatList, View, StatusBar,
} from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
  <View>
    <StatusBar barStyle="default" translucent={false} />
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </View>
);

export default CurrencyList;
