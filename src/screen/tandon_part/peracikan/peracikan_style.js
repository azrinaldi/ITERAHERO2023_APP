import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderColor: '#171717',
        elevation: 1,
        shadowOpacity: 1,
        shadowRadius: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        color: 'black',
        width: '20%', // Lebar label
    },
    input: {
        color: 'black',
        flex: 1, // Mengambil sisa lebar
        height: 40,
        borderWidth: 1,
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },

    button: {
        flex: 1, // Set flex to 1 to allow equal space for each button
        marginRight: 5,
    },

    buttonRight: {
        marginLeft: 5,
    },

    buttonLarge: {
        fontSize: 18, // Atur ukuran font sesuai keinginan
    },

    // Tambahkan properti fontSize pada style button50 dan buttonFull jika diperlukan
    button50: {
        flex: 0.5,
        marginRight: 5,
        fontSize: 18,
    },

    buttonFull: {
        flex: 1,
        fontSize: 18,
    },


});

export default styles