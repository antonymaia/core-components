import { StyleSheet, Image, Text, View,ImageBackground, TextInput, Button, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [titleName, setTitleName] = useState('');
  const [nameInput, setNameInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.imgBackground} source={require('./src/assets/images/imagem-background.jpeg')}>
          <View style={styles.containerTitle}>
          <Text style={styles.titleName}>{titleName}</Text>
          </View>
          {titleName != '' &&
            <View style={styles.containerAvatar}>
              <Image style={styles.imgAvatar} source={require('./src/assets/images/lua.jpg')}/>
            </View>
          }
          <View style={styles.containerForm}>
            <TextInput 
              style={styles.input}
              placeholder='Digite um nome'
              onChangeText={setNameInput}
              value={nameInput}/>
            <Button
              style={styles.button}
              title='Confirmar'
              onPress={() => setTitleName(nameInput)}/>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerTitle:{
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    bottom: 200
  },
  titleName:{
    fontSize: 32,
    color: '#fff',
    textAlign: 'center'
  },
  containerAvatar:{
    width: 120,
    height: 120,
    bottom: 100,
  },
  imgAvatar:{
    width: '100%',
    height: '100%',
    borderRadius: '100%'
  },
  containerForm:{
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    width: 200,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius:5,
    fontSize: 16,
    padding: 5
  },
  button:{
    width: 200,
    color: '#007AFF',
    fontSize:18
  }
});


