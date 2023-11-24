import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'red',
        paddingHorizontal: 10,
        // marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    cardTandon: {
        width: '100%',
        height: 310,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderColor: '#171717',
        shadowOpacity: 1,
        elevation: 1,
        shadowRadius: 1,
        marginBottom: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    cardFormula: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderColor: '#171717',
        shadowOpacity: 1,
        elevation: 1,
        shadowRadius: 1,
        marginBottom: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    img: {
        width: 200,
        height: 200,
    },
    icon:{
    }

});

export default styles