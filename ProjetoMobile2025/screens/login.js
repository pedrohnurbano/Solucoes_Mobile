import {ImageBackground, View, Text, StyleSheet, Image, TextInput, Button, ScrollView} from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';

export default function Login({navigation}) {
    return (
        <ScrollView>
        <View style={styles.container}>
        <ImageBackground  source={require('../assets/diamantes_background.png')} resizeMode="cover" style={styles.image_back}>

            <Image source={require('../assets/favicon.png')}/>
            {/* <Octicons name="home" size={24} color="black" /> */}
            {/* <Octicons name="person" size={24} color="black" /> */}
            <Text style={styles.text_cab}> COLÉGIO SATC </Text>
            <View styles={styles.text_encima}>
                <View style={styles.viewimg}>
                <Image style={styles.img2} source={require('../assets/imagem_1.png')}/> 
                </View>
                <br></br>
                <Text style={styles.txt}> Menu de Login: </Text>
                <br></br>

                <Text> Nome de usuário: </Text>
                <TextInput style={styles.txtinput}
                    placeholder="Digite seu nome de usuário"
                    placeholderTextColor={'black'}
                    />
                <Text> Senha: </Text>
                <TextInput style={styles.txtinput}
                    placeholder="Digite sua senha"
                    placeholderTextColor={'black'}
                />
                <Button
                    title="Entrar" 
                    color={'green'}
                    onPress={ () => navigation.navigate('Home')}
                />
            </View>

            <br></br>
            <Text style={styles.txtcred}> Colégio SATC - Inovação, Tecnologia e Negócios. </Text>
        </ImageBackground>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ffffff',
        flex: 1,
        padding: 20,
        paddingTop: 0,
        justifyContent: 'space-evenly',
    },
    txt:{
        fontSize: 20,
        textAlign: 'center',
        width: 380,
        fontWeight: 'bold',
    },
    txt2:{
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'justify',
        width: 250,
    },
    txtcred:{
        alignSelf: 'center',
    },
    image_back: {
        flex: 1,
        justifyContent: 'center',
      },
    txtinput: {
        height: 40,          
        margin: 12,          
        borderWidth: 1,      
        borderColor: 'black',  
        padding: 10,         
    },
    text_encima: {
        
    }
})