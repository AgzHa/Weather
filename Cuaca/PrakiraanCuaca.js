import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image 
} from 'react-native';


export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', paddingTop: 15,fontSize: 20 }}> Masukan Nama Kota </Text>
          <TextInput
                style={{ height: 40, color: 'white'}}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="black"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>

      <View style={styles.box4}>
          <Text> City : { this.state.city} </Text>
          <Text> Temp : { this.state.forecast.temp} </Text>
          <Text> Main : { this.state.forecast.main} </Text>
          <Text> Main Desc : { this.state.forecast.description} </Text>
      </View>
      
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#673AB7',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 10,
  },
  box2: {
    flex: 3,
    backgroundColor: '#1A237E',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 4,
    backgroundColor: '#1A237E',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 4,
    backgroundColor: '#1A237E',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  box5: {
    flex: 2,
    backgroundColor: '#1565C0',
    margin: 10
  },
  button: {
    width: 180,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});
