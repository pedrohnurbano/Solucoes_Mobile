// IMPORTAÇÃO DE COMPONENTES:
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import Estoque from './screens/estoque';
import FaleConosco from './screens/fale_conosco';

// NAVEGAÇÕES:
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// // EXPORTAÇÃO DO APLICATIVO:
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FaleConosco/>
//     </View>
//   );
// }

/////////////////////////////////////////////////////////////////////

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Estoque" component={Estoque} />
    </Stack.Navigator>
  );
}

/////////////////////////////////////////////////////////////////////

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Estoque" component={Estoque} />
      <Drawer.Screen name="Fale Conosco" component={FaleConosco} />
    </Drawer.Navigator>
  );
}

/////////////////////////////////////////////////////////////////////

// ESTILIZAÇÃO DA TELA:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
