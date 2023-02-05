import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Promo} from '../types/index.d';

const Promos: Promo[] = [
  {alt: 'Promo 1', image: require('../assets/promo.png')},
  {alt: 'Promo 2', image: require('../assets/promo2.png')},
  {alt: 'Promo 3', image: require('../assets/promo3.png')},
];
const PromoSection = () => {
  return (
    <View
      style={{
        marginTop: 20,
      }}>
      {Promos.map((item: Promo, index: number) => (
        <TouchableOpacity key={'promo' + index}>
          <View style={styles.Item}>
            <Image
              resizeMode="contain"
              style={styles.Image}
              source={item.image}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  Image: {
    objectFit: 'contain',
    maxWidth: '94%',
  },
});
export default PromoSection;
