import {ImageSourcePropType} from 'react-native';

export type Promo = {
  alt: string;
  image: ImageSourcePropType;
};

export type Service = {
  label: string;
  image: ImageSourcePropType;
  value: string;
  BadeContent?: string;
};

export type FlightProps = {
  isRoundTrip: boolean;
  isCitizen: boolean;
  from: string;
  to: string;
  dpDate: string;
  rtDate: string;
};
