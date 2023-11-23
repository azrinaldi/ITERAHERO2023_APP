import React, {useEffect, useState} from 'react';
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
import Loading from '../../component/loading';
import styles from './tandon_screen_style';
import TandonPage from '../../page/tandon/tandon_page';

const TandonScreen = props => {
  const navigate = useNavigation();

  const {dataListTandon} = useSelector(state => state.userReducer);

  // const { dataListTandon, dataDashboard } = useSelector(
  //     state => state.userReducer,
  // );
  // const id = props.data.idData

  //   const dispatch = useDispatch();

  //   const [isLoading, setIsloading] = useState(true);

  //   const {menuGreTa} = useSelector(state => state.userReducer);

  // useEffect(() => {
  //     getApiById()
  //     return () => setIsloading(true)
  // }, [menuGreTa]);

  // console.log(dataListTandon.data);
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
