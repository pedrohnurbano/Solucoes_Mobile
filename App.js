
import Profile from "./components/profile";
import {Gallery, Artist} from "./components/profile";
import {View, StyleSheet} from 'react-native';

import Test from "./components/test";

export default function App() {
  return (
    <View style={styles.containerView} >
      <Test/>
    </View>
  );
}

const styles = StyleSheet.create({
    containerView:{
        flex: 1,
    }
})