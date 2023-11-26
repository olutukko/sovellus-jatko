import { StyleSheet, View, Button, SafeAreaView, TextInput } from 'react-native';


import Header from './components/Header';
import WeatherInfo from './components/WeatherInfo';
import { useState, useEffect } from 'react';

const App = () => {
   const [weatherData, setWeatherData] = useState({
    cityName: "Helsinki",
    description: "Sunny",
    temperature: 0,
    windSpeed: 0,
    icon: "https://openweathermap.org/img/wn/01d@2x.png"
   })

  const [URL, setURL] = useState("https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=6c433438776b5be4ac86001dc88de74d&units=metric")
  const [city, setCityName] = useState('');

  const fetchWeatherData = async () => {
    try {
      const response = await fetch (URL);
      const weatherJson = await response.json();
      setWeatherData({
        cityName: weatherJson.name,
        description: weatherJson.weather[0].main,
        temperature: weatherJson.main.temp,
        windSpeed: weatherJson.wind.speed,
        icon: `https://openweathermap.org/img/wn/${weatherJson.weather[0].icon}@2x.png`
      })
    } 
    catch(err) {
      console.error("Virhe hakiessa säätietoja");
    }
  }

  const updateURL = ({ cityName }) => {
    setURL(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6c433438776b5be4ac86001dc88de74d&units=metric`);
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [URL]);


  return (
    <SafeAreaView style={{flex: 5}}>

      <View style={{flex: 1}}>
        <Header cityName={weatherData.cityName}></Header>
      </View>

      <View style={{flex: 3}}>
      <WeatherInfo weatherDesc={weatherData.description} temperature={weatherData.temperature} windSpeed= {weatherData.windSpeed} icon = {weatherData.icon}></WeatherInfo>
      </View>

      <View style={styles.ColumnBackground}>
        <TextInput
          placeholder='Paikkakunta'
          onChangeText={(text) => setCityName(text)}
          value={city}
        ></TextInput>
        <Button onPress={() => updateURL({ cityName: city })} title='Search'></Button>
        <Button onPress={fetchWeatherData} title="refresh" style={{flex: 1}}></Button>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ColumnBackground: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;