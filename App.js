import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Form from '.components/Form';
import Content from './components/Content';
import { useState } from 'react-native';

const App = () => {

  const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'
  const images = {
    Clear: 'http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg',
    Clouds:
      'https://www.princeton.edu/sites/default/files/styles/full_2x/public/images/2018/01/clouds-19.jpg?itok=7jputHX1',
    Rain: 'https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg'
  }

  const [city, setCity] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');

  const fetchData = () => {
    fetchCityData(city);
  }

  const fetchCityData = async city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const api_call = await fetch(url);
    const response = await api_call.json();

    setCountryCode(response.sys.country);
    setTemp(response.main.temp);
    setWeather(response.weather[0].main);
  }


  return (
    <View style={styles.container}>
      <Image source={{ uri: images[weather] }} style={styles.image}/>
      <Form onChangeText={text => setCity(text)} onSubmit={fetchData}/>
      <Content temp={temp} city={city} countryCode={countryCode} weather={weather}/>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
});

export default App;
