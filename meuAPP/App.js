import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class App extends Component {
  render() {

    let nome = 'Felipe'


    return (
      <View>
        <Text>Olá Mundo</Text>
        <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>Sujeito Programador</Text>
        
        <Text style={{ fontSize: 30 }}>{nome}</Text>
        <Jobs largura={500} altura={200} nome={'Steve Jobs'} />
      </View>
    )
  }
}

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png'
    return (
      <View>

        <Image style={{ width: this.props.largura, height: this.props.altura }} source={{ uri: img }} />
        <Text>{this.props.nome}</Text>
      </View>
    )
  }
}

export default App;