import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './components/Estilos'; 
import Funciones from './components/Funciones'; 

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Marvel APP</Text>
      </View>
      <Funciones />
    </View>
  );
};

export default App;
