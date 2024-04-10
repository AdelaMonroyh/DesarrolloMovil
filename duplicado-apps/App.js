import { StatusBar } from "expo-status-bar";
import { Image, KeyboardAvoidingView,StyleSheet,Text,TextInput,TouchableHighlight,View,} from "react-native";

const FacebookLogin = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.upperText}>Español</Text>
      <Image
        source={require("./assets/logoFace.png")}
        style={styles.logo}
      />
      <View style={styles.numero}>
        <TextInput style={styles.input} placeholder="Celular o correo electrónico" />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
        />
        <TouchableHighlight style={styles.iniciaSesion}>
          <Text style={styles.TextoIniciaS}>Iniciar sesión</Text>
        </TouchableHighlight>
        <Text style={styles.contraseña}>¿Olvidaste tu contraseña?</Text>
      </View>

      <TouchableHighlight style={styles.BtnCrearCuenta}>
        <Text style={styles.crearCuenta}>Crear cuenta nueva</Text>
      </TouchableHighlight>

      <Image source={require("./assets/meta.png")} style={styles.meta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#3b5998",
  alignItems: "center",
  gap: 20,
  padding: 20,
  paddingTop: 80,
  },
  upperText:{ 
  marginBottom: 80 
  },
  logo: { 
  height: 80,
  width: 50,
  marginBottom: 80 
  },
  numero: { 
  width: "100%", 
  gap: 15 
  },
  input: {
  width: "100%",
  height: 55,
  borderColor: "lightgray",
  borderWidth: 1,
  borderRadius: 10,
  padding: 15,
  backgroundColor: "white",
  },
  iniciaSesion: {
  backgroundColor: "#2E89FF",
  borderRadius: 20,
  height: 40,
  justifyContent: "center",
  },
  TextoIniciaS: {
  color: "white",
  textAlign: "center",
  fontSize: 16 
  },
  contraseña:{
  textAlign: "center",
  fontSize: 14 
  },
  BtnCrearCuenta: {
  borderRadius: 15,
  borderColor: "#2E89FF",
  borderWidth: 1,
  height: 40,
  justifyContent: "center",
  width: "100%",
  marginTop: 80,
  },
  crearCuenta: { 
  color: "#2E89FF", 
  textAlign: "center",
  fontSize: 14 },
  meta: { height: 40, width: 80 },
});

export default FacebookLogin;