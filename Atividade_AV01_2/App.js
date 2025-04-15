// IMPORTAÇÃO DE COMPONENTES:
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Estoque from './screens/estoque';
import FaleConosco from './screens/fale_conosco';

// NAVEGAÇÕES:
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

// EXPORTAÇÃO DO APLICATIVO:
export default function App() {
  return (
    <View style={styles.container}>
      <FaleConosco/>
    </View>
  );
}

// ESTILIZAÇÃO DA TELA:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
