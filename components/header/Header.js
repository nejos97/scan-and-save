import { StyleSheet, View,Text, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Header = () => {
    return(
        <View style={styles.container}>
            <Pressable style={styles.filter_button_box} onPress={() => alert('Not implemented yet!')}>
                <Ionicons name="cog" size={30}/>
            </Pressable>
            <Text style={styles.logo} >
                Scan & Save
            </Text>
            <Pressable style={styles.filter_button_box} onPress={() => alert('Not implemented yet!')}>
                <Ionicons name="filter" size={26}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'SF-Pro-Rounded-Bold',
        fontSize: 25,
        color: '#ed5f00'
    },
    filter_button_box: {
        height: 42,
        width: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e2e1',
        color: '#020202',
        borderRadius: 40,
    }
});
  