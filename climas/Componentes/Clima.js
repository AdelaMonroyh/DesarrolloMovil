import { View, Text, Alert, ActivityIndicator, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Clima = () => {
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('https://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110%20&q=huejutla&days=10&aqi=no&alerts=no&lang=es')
            .then(res => res.json())
            .then(obj => {
                setData(obj)
                setLoad(true)
            })
            .catch(err => Alert.alert('Error inesperado : ' + err))
    }, [])

    const Card = ({ fecha, iko, min, max }) => {
        return (
            <View style={styles.cardContainer}>
                <Text>{fecha} </Text>
                <Image style={styles.weatherIcon} source={{ uri: 'https:' + iko }} />
                <Text style={styles.temperature}> {max}°C </Text>
                <Text style={styles.temperature}> {min}°C </Text>
            </View>
        )
    }

    const LScreen = () => {
        const [currentHourlyForecast, setCurrentHourlyForecast] = useState([]);

        useEffect(() => {
            if (data) {
                const currentHour = new Date().getHours();
                const next24Hours = data.forecast.forecastday[0].hour.slice(currentHour, currentHour + 24);
                setCurrentHourlyForecast(next24Hours);
            }
        }, [data]);

        return (
            <ScrollView>
                <Text style={styles.title}>{data.location.name}</Text>
                <Text style={styles.currentTemperature}>{data.current.temp_c}°</Text>
                <Text style={styles.condition}>
                    {data.current.condition.text} - Máx: {data.forecast.forecastday[0].day.maxtemp_c}°C / Min: {data.forecast.forecastday[0].day.mintemp_c}°C
                </Text>

                <View style={styles.color}>
                    <FlatList
                        horizontal
                        data={currentHourlyForecast}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.hourlyContainer}>
                                <Text style={styles.hour}>{item.time.split(' ')[1]}</Text>
                                <Image style={styles.hourIcon} source={{ uri: 'https:' + item.condition.icon }} />
                                <Text style={styles.hourTemperature}>{item.temp_c}°C</Text>
                            </View>
                        )}
                    />
                </View>

                <View style={styles.color}>
                    <FlatList
                        data={data.forecast.forecastday}
                        renderItem={({ item }) => <Card fecha={item.date} iko={item.day.condition.icon} max={item.day.maxtemp_c} min={item.day.mintemp_c} />}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.infoRow}>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>   UV                   {data.current.uv}</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>Temperatura {data.current.temp_c}°C</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>Humedad     {data.current.humidity}%</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>Viento E          {data.current.wind_kph} km/h</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>Presión d aire {data.current.pressure_mb} hPa</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>Visibilidad      {data.current.vis_km} km</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.color}>
                    <Text style={styles.temperature}>Hora de salida del sol: {data.forecast.forecastday[0].astro.sunrise}</Text>
                    <Text style={styles.temperature}>Hora de puesta del sol: {data.forecast.forecastday[0].astro.sunset}</Text>
                </View>


            </ScrollView >
        );
    }


    const Uscreen = () => {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={'darkblue'} />
                <Text>Cargando datos...</Text>
            </View>
        )
    }

    return (
        <View>
            {load ? <LScreen /> : <Uscreen />}
        </View>
    )
}
const styles = StyleSheet.create({
    //el de huejutla
    title: {
        marginTop: 20,
        fontSize: 34,
        marginBottom: 10,
        textAlign: 'center',
    },
    //los numeros grandes
    currentTemperature: {
        fontSize: 80,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
    },
    //cardContainer: {
     //   backgroundColor: '#ADCFE1',
      //  flexDirection: 'row',
      //  alignItems: 'center',
      //  justifyContent: 'space-between',
       // padding: 10,
       // borderRadius: 10,
       // marginBottom: 15,
    //},
    cardContainer: {
        backgroundColor: '#3498db', // Cambiado el color de fondo
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15, // Aumentado el padding
        borderRadius: 15, // Aumentado el radio de borde
        marginHorizontal: 20, // Añadido margen horizontal
        marginBottom: 20, // Aumentado el margen inferior
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5, // Añadida elevación para sombra en Android
      },
      
    weatherIcon: {
        height: 50,
        width: 50,
    },
    temperature: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    condition: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoBox: {
        width: '45%', // Adjusted width for a more balanced look
        height: 100, // Increased height for more space
        padding: 10, // Increased padding for better spacing
        borderRadius: 20, // Increased border radius
        backgroundColor: '#1BA773', // Changed background color
        alignItems: 'center', // Centered content horizontally
        justifyContent: 'center', // Centered content vertically
        margin: 9, // Added margin for separation
    },
    infoText: {
        fontSize: 10, // Adjusted font size
        fontWeight: 'bold',
        color: '#FFFFFF', // Changed text color to white
        textAlign: 'center',
    },
    infoText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#070707',
        textAlign: 'center',
    },
    hourlyContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    color: {
        backgroundColor: '#0CBB9B',
        margin: 1,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        padding: 15,
    },
    hour: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    hourIcon: {
        height: 50,
        width: 50,
    },
    hourTemperature: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    
});

export default Clima;
