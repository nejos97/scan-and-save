import { View, Text, StyleSheet, Pressable } from 'react-native';

export const ScanList = () => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                console.log('Openning camera...')
            }} >
                <Text>Open camera</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    empty_list_text: {

    }
});
