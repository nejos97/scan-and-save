import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const EssentialMessage = () => {
    return (
        <View>
            <View style={styles.container} >
                <View>
                    <Text>Essentials</Text>
                    <Text>The importances of saving your QR Code</Text>
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
            <Pressable style={styles.button}>
                <View>
                    <Text style={styles.text} >Discover</Text>
                </View>
            </Pressable>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        height: 130,
        borderColor: "#0081f1",
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#cfe7fd'
    },
    logo: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 25,
        color: '#ed5f00'
    },
    button: {
        backgroundColor: '#0081f1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 10,
        elevation: 3,
        borderRadius: 20,
        width: 160,
    },
    text: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontFamily: 'SF-Pro-Rounded-Semibold',
        color: 'white'
    },
});
  