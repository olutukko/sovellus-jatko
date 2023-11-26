import { View, Text, StyleSheet } from "react-native"

const LocationInput = () => {
    return(
        <View style={styles.headerBackground}>
            <Text style={styles.headerText}>Tampere</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        backgroundColor: "lightgreen",
        borderWidth: 2
    },
    headerText: {
        fontFamily: "Arial",
        fontSize: 40
    }
})

export default LocationInput;