import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    Image
} from 'react-native';
import styles from "./monitoring_style";
import stylesGlobal from "../../../utils/style_global";
import { ScrollView } from "react-native";



const MonitoringScreenTandon = (props) => {
    const id = props.data.id
    const nama = props.data.nama
    const isOnline = props.data.isOnline
    const ppm = props.data.ppm
    const rasioA = props.data.rasioA
    const rasioB = props.data.rasioB
    const rasioAir = props.data.rasioAir
    const status = props.data.status

    return (
        <View style={{ height: '70%', width: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.cardTandon}>
                        <Text style={[
                            stylesGlobal.primer,
                            stylesGlobal.header2,
                            
                        ]}>
                            Informasi Tandon
                        </Text>
                    </View>

                    <View style={styles.cardFormula}>
                    <Text style={[
                            stylesGlobal.primer,
                            stylesGlobal.header2,
                        ]}>
                        Rasio Pupuk
                        </Text>
                        <Text style={[
                            stylesGlobal.secondary,
                            stylesGlobal.header1ss,
                        ]}>
                        {rasioA} : {rasioB} : {rasioAir} = {ppm}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
};

export default MonitoringScreenTandon