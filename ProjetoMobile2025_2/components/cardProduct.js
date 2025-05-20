import {View, Text, Image, StyleSheet} from 'react-native';

export default function CardProduct({id, nome, preco, imagem}) {
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <Text>ID: {id}</Text>
            <Text>Nome: {nome} - Preço: R$ {preco.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex           : 1        ,
        alignItems     : 'center' ,
        justifyContent : 'center' ,
        backgroundColor: '#f5f5f5',
        padding        : 10       ,
    },
    txt:{
        fontSize    : 25     ,
        fontWeight  : 'bold' ,
        color       : 'green',
        marginBottom: 20     ,
    },
    card:{
        marginBottom   : 10      ,
        padding        : 10      ,
        backgroundColor: '#fff'  ,
        borderRadius   : 5       ,
        alignItems     : 'center',
    },
    img:{
        width : 100,
        height: 100,
    },
});