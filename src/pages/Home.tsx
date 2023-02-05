import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import ServiceSection from '../components/ServiceSection';
import {Service} from '../types/index.d';
import FormSection from '../components/FormSection';
import PromoSection from '../components/PromoSection';
const Services: Service[] = [
  {label: 'Flights', image: require('../assets/mb_flights.png'), value: 'fl'},
  {label: 'Hotels', image: require('../assets/mb_hotels.png'), value: 'hl'},
  {label: 'Buses', image: require('../assets/mb_bus.png'), value: 'bu'},
  {label: 'Cars', image: require('../assets/mb_car.png'), value: 'ca'},
  {
    label: 'Balloons',
    image: require('../assets/mb_ballons.png'),
    value: 'ba',
    BadeContent: 'News!',
  },
  {label: 'Promos', image: require('../assets/mb_promo.png'), value: 'pr'},
];
const Home = () => {
  const [activeService, setActiveService] = useState<string>('fl');

  return (
    <View style={styles.Container}>
      <Header />
      <ServiceSection
        data={Services}
        onClick={value => {
          setActiveService(value);
        }}
        active={activeService}
      />
      <FormSection />
      <PromoSection />
    </View>
  );
};
const styles = StyleSheet.create({
  Text: {color: 'black'},
  Container: {paddingHorizontal: 4},
});
export default Home;
