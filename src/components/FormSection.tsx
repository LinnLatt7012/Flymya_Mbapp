import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FlightProps} from '../types/index.d';

const RadioButton = ({
  selected,
  color,
  size = 12,
  style,
}: {
  selected: boolean;
  color: string;
  size?: number;
  style: StyleProp<ViewStyle>;
}) => {
  const outerBorder = {
    height: size,
    width: size,
    borderRadius: size / 2,
    borderColor: selected ? color : 'grey',
  };
  const innerBorder = {
    borderRadius: size / 4,
    height: size / 2,
    width: size / 2,
  };
  return (
    <View style={[styles.Radio, outerBorder, style]}>
      {selected ? (
        <View
          style={[{borderRadius: 6, backgroundColor: color}, innerBorder]}
        />
      ) : null}
    </View>
  );
};

const FormSection = () => {
  const [value, setValue] = useState<FlightProps>({
    isCitizen: true,
    isRoundTrip: false,
    from: '',
    to: '',
    dpDate: '',
    rtDate: '',
  });
  const TabStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? 'white' : '#EBECF0',
    borderBottomWidth: isActive ? 2 : 0,
    borderColor: '#1FB8F1',
  });
  const onChangeHandler = (name: string, data: boolean | string) => {
    setValue({...value, [name]: data});
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Citizen}>
        <Text style={styles.Text}>Myanmar Citizen</Text>
        <View style={styles.CLef}>
          <TouchableOpacity
            onPress={() => setValue({...value, isCitizen: true})}>
            <View style={styles.RadioButton}>
              <RadioButton
                selected={value.isCitizen}
                size={16}
                color={'#1FB8F1'}
                style={{}}
              />

              <Text style={styles.Text}>Yes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue({...value, isCitizen: false})}>
            <View style={styles.RadioButton}>
              <RadioButton
                selected={!value.isCitizen}
                size={16}
                color={'#1FB8F1'}
                style={{}}
              />
              <Text style={styles.Text}>No</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={styles.TabContainer}>
          <TouchableOpacity
            onPress={() => onChangeHandler('isRoundTrip', false)}>
            <View style={[styles.Tab, TabStyle(!value.isRoundTrip)]}>
              <Text style={styles.Text}> One Way</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChangeHandler('isRoundTrip', true)}>
            <View style={[styles.Tab, TabStyle(value.isRoundTrip)]}>
              <Text style={styles.Text}> Round Trip</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.lefText}>From</Text>
          <Text style={styles.rigText}>Mandalay</Text>
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.lefText}>To</Text>
          <Text style={styles.rigText}>Yangon</Text>
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.lefText}>Departure</Text>
          <Text style={styles.rigText}>Sat, 4 Feb 2023</Text>
        </View>
        {value.isRoundTrip && (
          <View style={styles.TextBox}>
            <Text style={styles.lefText}>Return</Text>
            <Text style={styles.rigText}>Mon, 6 Feb 2023</Text>
          </View>
        )}
      </View>
      <TouchableOpacity>
        <View style={styles.Buttom}>
          <Text style={styles.ButtomText}> Search</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {marginHorizontal: 14},
  Text: {
    color: 'black',
  },
  Citizen: {
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: '#EBECF0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CLef: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  RadioButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  RadioLabel: {},
  Radio: {
    borderWidth: 2,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Card: {
    marginVertical: 10,
    elevation: 2,
    backgroundColor: 'white',
    minHeight: 200,
    borderRadius: 10,
    overflow: 'hidden',
    // boxShadow:
    //   'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  },
  TabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Tab: {
    // flex: 1,
    elevation: 2,
    padding: 18,
    minWidth: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF0',
  },
  lefText: {
    color: 'grey',
    fontSize: 16,
    // paddingLeft: 10,
  },
  rigText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
  Buttom: {
    alignItems: 'center',
    backgroundColor: '#1FB8F1',
    paddingVertical: 10,
    borderRadius: 4,
  },
  ButtomText: {
    fontSize: 18,
    color: 'white',
  },
});
export default FormSection;
