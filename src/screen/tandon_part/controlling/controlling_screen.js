import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';

import styles from './controlling_style';
import CardMonitoring from '../../../component/card_monitoring';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getAktuatorById} from '../../../redux/action';
import Loading from '../../../component/loading';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

const ControllingScreenTandon = props => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const id = props.data.idData;

  const onRefresh = useCallback(() => {
    setLoading(true);
    setRefreshing(true);
    AsyncStorage.getItem('token').then(respons => {
      dispatch(getAktuatorTandonById(id, respons));
    });
    wait(3000).then(() => {
      setRefreshing(false);
      setLoading(false);
    });
  }, []);

  const dispatch = useDispatch();

  const {dataAktuatorTandonById, menuMoCon} = useSelector(
    state => state.userReducer,
  );

  const getApiById = () => {
    AsyncStorage.getItem('token').then(respons => {
      dispatch(getAktuatorTandonById(id, respons));
      setLoading(false);
    });
  };

  useEffect(() => {
    getApiById();
  }, [menuMoCon]);

  console.log("Data Aktuator Tandon:    ",dataAktuatorTandonById)

  return (
    <>
      {dataAktuatorTandonById != undefined && isLoading == false ? (
        <View style={styles.container}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {dataAktuatorTandonById != undefined
              ? dataAktuatorTandonById.map(value => {
                  return (
                    // <CardMonitoring
                    //   data={{
                    //     id: value.id,
                    //     icon: value.icon,
                    //     name: value.name,
                    //     color: value.color,
                    //     topic_broker: value.topic_broker,
                    //     updated_at: value.updated_at,
                    //     status_lifecycle: value.status_lifecycle,
                    //   }}
                    // />
                  );
                })
              : null}
          </ScrollView>
        </View>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ControllingScreenTandon;
