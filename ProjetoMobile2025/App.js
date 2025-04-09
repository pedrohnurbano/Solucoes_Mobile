// import Profile from "./components/profile";
// import {Gallery, Artist} from "./components/profile";
// import Test from "./components/test";

import Octicons from '@expo/vector-icons/Octicons';

import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/login";
import Home from "./screens/home";
import Feed from "./screens/feed"; // New page (feed)
import Count from "./screens/count"; // New page (count)

function BottomTab() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home - Tab' component={Home}
      options={{
        tabBarActiveTintColor: "black",  // Cor do texto quando ativo
        tabBarInactiveTintColor: "black", // Cor do texto quando inativo
        tabBarStyle: { backgroundColor: "green" }, // Cor de fundo da barra
        tabBarIcon: () =>
        <Octicons name="home" size={24} color="black" />
      }}
      />
      <Tab.Screen name='Feed - Tab' component={Feed}
      options={{
        tabBarActiveTintColor: "black",  // Cor do texto quando ativo
        tabBarInactiveTintColor: "black", // Cor do texto quando inativo
        tabBarStyle: { backgroundColor: "green" }, // Cor de fundo da barra
        tabBarIcon: () =>
        <Octicons name="archive" size={24} color="black" />
      }}
      />
      <Tab.Screen name='Count - Tab' component={Count}
      options={{
        tabBarActiveTintColor: "black",  // Cor do texto quando ativo
        tabBarInactiveTintColor: "black", // Cor do texto quando inativo
        tabBarStyle: { backgroundColor: "green" }, // Cor de fundo da barra
        tabBarIcon: () =>
        <Octicons name="plus-circle" size={24} color="black" />
      }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela - Login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};