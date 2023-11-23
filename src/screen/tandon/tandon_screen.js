import React, {} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import stylesGlobal from '../../utils/style_global';
import styles from './tandon_screen_style';

const TandonScreen = () => {
  const navigate = useNavigation();

  const {dataListTandon} = useSelector(state => state.userReducer);

  return (
    <View style={[styles.scroll]}>
      <View style={[stylesGlobal.surface, styles.scrollContainer]}>
        <ScrollView>
          {dataListTandon.data.map((item, index) => {
            return (
              <>
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    navigate.navigate('TandonPage', {
                      id: item.id,
                      nama: item.nama,
                      isOnline: item.isOnline,
                      ppm: item.ppm,
                      rasioA: item.rasioA,
                      rasioB: item.rasioB,
                      rasioAir: item.rasioAir,
                      status: item.status,
                    })
                  }>
                  <View
                    style={[
                      stylesGlobal.backgroundOnPrimary,
                      styles.greenHouseCard,
                    ]}>
                    <Image
                      source={require('./tandon.jpg')}
                      style={styles.greenHousePicture}
                    />
                    <Text
                      style={[
                        stylesGlobal.primer,
                        stylesGlobal.header3,
                        {bottom: 10},
                      ]}>
                      {item.nama}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <View
                  style={[
                    stylesGlobal.backgroundBackground,
                    styles.transparantBar,
                  ]}
                />
              </>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default TandonScreen;
