import React from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Login(navigation) {
    const [text, onChangeText] = React.useState('Digite seu e-mail: ');
    const [text2, onChangeText2] = React.useState('Digite sua senha: ');
    return (
        <View>
            <Text> Login: </Text>
            <TextInput style={styles.input} onChangeText={onChangeText}value={text}></TextInput>
            <Text> Senha: </Text>
            <TextInput style={styles.input} onChangeText={onChangeText2}value={text2}></TextInput>
            <Button style={styles.butt} title="Entrar" color='black' onPress={() => navigation.navigate('Estoque')}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    butt: {
        borderRadius: 5,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});