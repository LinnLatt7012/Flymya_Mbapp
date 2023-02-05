import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Service} from '../types/index.d';

type ServicePropsType = {
  data: Service[];
  onClick: (value: string) => void;
  active: string;
};
const ServiceSection = ({data, onClick, active}: ServicePropsType) => {
  const activeColor = (isActive: boolean) => ({
    color: isActive ? '#1FB8F1' : 'black',
  });
  return (
    <View style={styles.Container}>
      {/* <FlatList
        data={data}
        style={{
          alignSelf: 'center',
        }}
        renderItem={({item}: {item: Service}) => (
          <TouchableOpacity
            onPress={() => {
              onClick(item.value);
            }}>
            <View style={styles.Item}>
              {item.BadeContent && (
                <View style={styles.Badge}>
                  <Text style={styles.BadgeText}>{item.BadeContent}</Text>
                </View>
              )}
              <Image
                resizeMode="contain"
                style={styles.ImageThumbnail}
                source={item.image}
              />
              <Text style={[styles.Text, activeColor(active === item.value)]}>
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(___, index: number) => 'service' + index}
      /> */}
      {data.map((item: Service, index: number) => (
        <TouchableOpacity
          key={'service-' + index}
          onPress={() => {
            onClick(item.value);
          }}>
          <View style={styles.Item}>
            {item.BadeContent && (
              <View style={styles.Badge}>
                <Text style={styles.BadgeText}>{item.BadeContent}</Text>
              </View>
            )}
            <Image
              resizeMode="contain"
              style={styles.ImageThumbnail}
              source={item.image}
            />
            <Text style={[styles.Text, activeColor(active === item.value)]}>
              {item.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  Item: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    position: 'relative',
    minWidth: '30%',
  },
  ImageThumbnail: {
    objectFit: 'contain',
    paddingVertical: 12,
  },
  Text: {
    paddingTop: 4,
    fontSize: 16,
  },
  Badge: {
    backgroundColor: '#D93025',
    borderRadius: 4,
    zIndex: 100,
    top: 5,
    paddingHorizontal: 4,
    position: 'absolute',
  },
  BadgeText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 10,
  },
});
export default ServiceSection;
