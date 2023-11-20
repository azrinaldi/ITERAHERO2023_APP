import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import styles from './tandon_page_style';
import stylesGlobal from '../../utils/style_global';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

//Bar
import BarControlling from '../../component/bar_tandon/bar_controlling';
import BarMonitoring from '../../component/bar_tandon/bar_monitoring';
import BarPenjadwalan from '../../component/bar_tandon/bar_penjadwalan';
import BarPeracikan from '../../component/bar_tandon/bar_peracikan';

//Screen
import MonitoringScreen from '../../screen/tandon_part/monitoring/monitoring_screen';
import ControllingScreen from '../../screen/tandon_part/controlling/controlling_screen';
import PenjadwalanScreen from '../../screen/tandon_part/penjadwalan/penjadwalan_screen';
import PeracikanScreen from '../../screen/tandon_part/peracikan/peracikan_screen';

import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApiGeenhouseById } from '../../redux/action';
import Loading from '../../component/loading';

const TandonPage = ({ route, navigation }) => {

    const { id } = route.params

    const [isLoading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const { menuTandon, dataGreenhouseById } = useSelector(
        state => state.userReducer,
    );

    const getApiById = () => {
        AsyncStorage.getItem('token')
            .then(respons => {
                dispatch(getApiGeenhouseById(id, respons))
            }).finally(() => setLoading(false))
    }
    useEffect(() => {
        getApiById()
        return () => setLoading(true);
    }, []);
    return (
        <>
            {
                isLoading == false && dataGreenhouseById.data != undefined ?
                    <SafeAreaView style={[stylesGlobal.surface, { flex: 1 }]} >
                        <StatusBar
                            animated={true}
                            backgroundColor={'#09322D'} />
                        <ImageBackground
                            resizeMode='cover'
                            source={{ uri: dataGreenhouseById.data.image }}
                            style={styles.container}
                        >
                            <View style={styles.imageBackgroundPlus} >
                                <TouchableOpacity style={styles.backView} onPress={() => navigation.goBack()}>
                                    <Icon name="arrow-back" size={24} color="#ffff" />
                                    <View style={stylesGlobal.space10} />
                                    <Text style={[stylesGlobal.header2, { color: '#ffff' }]}>
                                        {dataGreenhouseById.data.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>

                        <View style={styles.monitoringAndControlling}>
                            {
                                menuTandon == 'monitoring' ?
                                    <>
                                        <BarMonitoring />
                                        <View style={stylesGlobal.enter20} />
                                        <MonitoringScreen/>
                                    </>
                                    : null
                            }
                            {
                                menuTandon == 'controlling' ?
                                    <>
                                        <BarControlling />
                                        <View style={stylesGlobal.enter20} />
                                        <ControllingScreen/>
                                    </>
                                    : null
                            }
                            {
                                menuTandon == 'peracikan' ?
                                    <>
                                        <BarPeracikan />
                                        <View style={stylesGlobal.enter20} />
                                        <PeracikanScreen/>
                                    </>
                                    : null
                            }
                            {
                                menuTandon == 'penjadwalan' ?
                                    <>
                                        <BarPenjadwalan />
                                        <View style={stylesGlobal.enter20} />
                                        <PenjadwalanScreen/>
                                    </>
                                    : null
                            }
                            
                        </View>
                    </SafeAreaView>
                    : <Loading />
            }
        </>
    );
};

export default TandonPage;