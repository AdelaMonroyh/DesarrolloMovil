import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Linking, TouchableOpacity, Image } from 'react-native'; 
import { styles } from './Estilos'; 

const Funciones = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchMarvelData();
  }, []);

  const fetchMarvelData = async () => {
    try {
      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ae21f3b776d75d36a980d966f042945e&hash=b610413ca80c7dd84bbf8e9bf6dde8c8';
      const response = await fetch(urlAPI);
      const data = await response.json();
      setCharacters(data.data.results);
    } catch (error) {
      console.error('Error fetching Marvel data:', error);
    }
  };

  const handleCharacterPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {characters.map((hero, index) => (
        <View key={hero.id} style={styles.heroCard}>
          <TouchableOpacity onPress={() => handleCharacterPress(hero.urls[0].url)}>
            <Image source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }} style={styles.thumbnail} />
            <Text style={styles.title}>{hero.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Funciones;