import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import stylesGlobal from '../../utils/style_global';
import styles from './greenhouse_screen_style';
import Loading from '../../component/loading';
import GreenHousePage from '../../page/green_house/green_house_page';

const GreenHouseScreen = (props) => {

    const navigate = useNavigation()
    const { dataListGreenHouse, dataDashboard } = useSelector(
        state => state.userReducer,
    );
    // const id = props.data.idData

    const dispatch = useDispatch()

    const [isLoading, setIsloading] = useState(true)

    const { menuGreTa } = useSelector(
        state => state.userReducer,
    );

    // useEffect(() => {
    //     getApiById()
    //     return () => setIsloading(true)
    // }, [menuGreTa]);

    return (
        <View style={[styles.scroll]}>
            <View style={[stylesGlobal.surface, styles.scrollContainer]}>
                <ScrollView >
                    {dataListGreenHouse.data.map((item, index) => {
                        return (
                            <>

                                <TouchableWithoutFeedback key={index}

                                    onPress={() => navigate.navigate('GreenHousePage', {
                                        id: item.id,
                                    })}
                                >
                                    <View
                                        style={[stylesGlobal.backgroundOnPrimary, styles.greenHouseCard]}>
                                        <Image
                                            source={{ uri: item.image, }}
                                            style={styles.greenHousePicture}
                                        />
                                        <Text style={[stylesGlobal.primer, stylesGlobal.header3, { bottom: 10 }]}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>

                                <View style={[stylesGlobal.backgroundBackground, styles.transparantBar]} />
                            </>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

export default GreenHouseScreen;