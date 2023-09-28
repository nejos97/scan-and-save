import { StyleSheet, View,Text, Button, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const Header = () => {
    return(
        <View style={styles.container}>
            <Pressable style={{...styles.button, ...styles.settings_button}}>
                <Text style={{...styles.text, ...styles.settings_text_button}} >Settings</Text>
            </Pressable>
            <Text style={styles.logo} >
                Scan & Save
            </Text>
            <Pressable style={{...styles.button, ...styles.back_up_button}}>
                <Text style={{ ...styles.text, ...styles.back_up_text }} >Back up</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 25,
        color: '#ed5f00'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        elevation: 3,
        borderRadius: 20,
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontFamily: 'SF-Pro-Rounded-Medium',
    },
    back_up_button: {
        backgroundColor: '#e9f9ee',
    },
    back_up_text: {
        color: '#299764',
    },
    settings_button: {
        backgroundColor: '#fff1e7',
    },
    settings_text_button: {
        color: '#ed5f00',
    }
});
  