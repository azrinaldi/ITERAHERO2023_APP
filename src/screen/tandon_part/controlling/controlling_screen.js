import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    ScrollView,
    RefreshControl
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./controlling_style";
import stylesGlobal from "../../../utils/style_global";

import CardMonitoring from "../../../component/card_monitoring";
import Loading from "../../../component/loading";
import { getApiAktuatorTandon } from "../../../redux/action";



const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    });
}
console.log("Controlling Screen: ",)
const ControllingScreenTandon = (props) => {
    const dispatch = useDispatch();
    const id = props.data.idData

    useEffect(() => {
        AsyncStorage.getItem('token').then(token => {
            dispatch(getApiAktuatorTandon(id, token));
        });
    }, [dispatch, id]);

    const aktuatorData = useSelector(state => state.userReducer.dataListAktuatorTandon);
    console.log("inni akturaoriaois:")
    return (
        <View>

        </View>
    )
};

export default ControllingScreenTandon