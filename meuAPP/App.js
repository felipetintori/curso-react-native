import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class App extends Component{
  render(){

    let nome ='Felipe'
    let img = 'https://sujeitoprogramador.com/steve.png'
  
    return(
      <View>
        <Text>Olá Mundo</Text>
        <Text style={{color : 'red', fontSize: 25, margin: 15}}>Sujeito Programador</Text>
        <Image style={{width: 300, height: 300}} source={{uri: img}} />
        <Text style={{fontSize: 30}}>{nome}</Text>
      </View>
    ) 
  }
}

export default App;