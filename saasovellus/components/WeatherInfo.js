import { View, Text, StyleSheet, Image } from "react-native"

const WeatherInfo = ({weatherDesc, temperature, windSpeed, icon}) => {
    return(
        <View style={styles.headerBackground}>
            <Text style={styles.headerText}>{weatherDesc}</Text>
            <Text style={styles.headerText}>{temperature + " c"}</Text>
            <Text style={styles.headerText}>{windSpeed + "m/s"}</Text>
            <Image 
                source={{ uri: icon }}
                style={{ width: 200, height: 200 }}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        backgroundColor: "lightblue",
        borderWidth: 2
    },
    headerText: {
        fontSize: 20
    },

})

export default WeatherInfo;