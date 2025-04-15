import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';

export default function FaleConosco() {
    const [text, onChangeText] = React.useState('Digite seu nome: ');
    const [text2, onChangeText2] = React.useState('Digite seu e-mail: ');
    const [text3, onChangeText3] = React.useState('Digite sua mensagem: ');
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={require('assets/imagem-6.png')} style={styles.imagem}></Image>
                <Text> Nome: </Text>
                <TextInput style={styles.input} onChangeText={onChangeText}value={text}></TextInput>
                <Text> E-mail: </Text>
                <TextInput style={styles.input} onChangeText={onChangeText2}value={text2}></TextInput>
                <Text> Mensagem: </Text>
                <TextInput style={styles.input} onChangeText={onChangeText3}value={text3}></TextInput>
                <Button style={styles.butt} title="Entrar" color='black' onPress={navigation.navigate("screens/estoque.js")}></Button>
            </ScrollView>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imagem:{
        width: 50,
        height: 50,
    },
})