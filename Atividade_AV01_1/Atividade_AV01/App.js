import {View, StyleSheet} from 'react-native';

import Home from "./screens/home";
import Login from "./screens/login";

export default function App() {
  return (
    <View style={styles.containerView} >
      {/* <Home/> */}
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
    containerView:{
        flex: 1,
    }
}) 