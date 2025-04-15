import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';

export default function Estoque() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={require('../assets/imagem_1.jpg')} style={styles.imagem}></Image>
                <Text style={styles.titulo}> Uma Dobra no Tempo </Text>
                <Text style={styles.descricao}> Livro de abordagem científica e ficção. Livro de Nº 01 da Saga de "Uma Dobra no Tempo", de Madelaine Lenguee.</Text>

                <Image source={require('../assets/imagem_2.jpg')} style={styles.imagem}></Image>
                <Text style={styles.titulo}> Um Vento à Porta </Text>
                <Text style={styles.descricao}> Livro de abordagem científica e ficção. Livro de Nº 02 da Saga de "Uma Dobra no Tempo", de Madelaine Lenguee.</Text>

                <Image source={require('../assets/imagem_3.jpg')} style={styles.imagem}></Image>
                <Text style={styles.titulo}> Um Planeta em Seu Giro Veloz </Text>
                <Text style={styles.descricao}> Livro de abordagem científica e ficção. Livro de Nº 03 da Saga de "Uma Dobra no Tempo", de Madelaine Lenguee.</Text>

                <Image source={require('../assets/imagem_4.jpg')} style={styles.imagem}></Image>
                <Text style={styles.titulo}> Um Tempo Aceitável </Text>
                <Text style={styles.descricao}> Livro de abordagem científica e ficção. Livro de Nº 04 da Saga de "Uma Dobra no Tempo", de Madelaine Lenguee.</Text>

                <Image source={require('../assets/imagem_5.jpg')} style={styles.imagem}></Image>
                <Text style={styles.titulo}> Muitas Águas </Text>
                <Text style={styles.descricao}> Livro de abordagem científica e ficção. Livro de Nº 05 da Saga de "Uma Dobra no Tempo", de Madelaine Lenguee.</Text>

                <Button style={styles.butt} title="-" color='black'></Button>
                <Button style={styles.butt} title="+" color='black'></Button>
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
    titulo: {
        fontSize: 20,
    },
    descricao: {
        fontSize: 12,
    }
})