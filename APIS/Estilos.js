import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fondo claro
    padding: 15,
  },
  header: {
    backgroundColor: '#0E283F',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'red',
    fontSize: 28,
    fontWeight: 'bold',
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  heroCard: {
    width: '100%', // Tomar el ancho completo
    marginBottom: 20,
    backgroundColor: '#211C40',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#FAFAF0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 15, // Espaciado interno
  },
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30, // Aumentar el tamaño del título
    fontWeight: 'bold',
    color: '#FAFAF0',
    marginTop: 10,
    alignItems: 'center',
  },
});



