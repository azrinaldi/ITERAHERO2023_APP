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
import Loading from '../../component/loading';
import styles from './tandon_screen_style';
import TandonPage from '../../page/tandon/tandon_page';
import { URL } from 'url';

const TandonScreen = (props) => {

    const navigate = useNavigation()
    const dataListTandon = {
        data: [
          {
            id: 1,
            name: "Tandon A",
            image: "",
          },
          {
            id: 2,
            name: "Tandon B",
            image: "",
          },
          {
            id: 3,
            name: "Tandon C",
            image: "",
          },
        ],
      };
      
    // const { dataListTandon, dataDashboard } = useSelector(
    //     state => state.userReducer,
    // );
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
                    {dataListTandon.data.map((item, index) => {
                        return (
                            <>
                                <TouchableWithoutFeedback key={index}

                                    onPress={() => navigate.navigate('TandonPage', {
                                        id: item.id,
                                    })}
                                >
                                    <View
                                        style={[stylesGlobal.backgroundOnPrimary, styles.greenHouseCard]}>
                                        <Image
                                            source={require('./tandon.jpg')}
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

export default TandonScreen;