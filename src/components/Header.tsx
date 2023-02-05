import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.Header}>
      <View style={styles.lefCon}>
        <Image
          style={styles.logo}
          source={require('../assets/logo_large.png')}
        />
      </View>
      <View style={styles.rigCon}>
        <Image
          style={styles.avatar}
          source={require('../assets/english.png')}
        />
        <Image
          style={styles.avatar}
          source={require('../assets/profile.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    objectFit: 'contain',
  },
  avatar: {
    width: 50,

    objectFit: 'contain',
  },
  Header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  lefCon: {
    // maxWidth: '50%',
  },
  rigCon: {
    // maxWidth: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Header;
