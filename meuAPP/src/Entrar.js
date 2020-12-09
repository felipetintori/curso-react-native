import React, { Component } from 'react'

import { View, StyleSheet, Text, Button, Modal } from 'react-native'


export default class Entrar extends Component {

 
  
  render() {
    return (
      
          <View style={{backgroundColor: '#292929', flex: 1}}>
            <Text style={{color: '#FFF', fontSize: 28}}>Seja Bem Vindo</Text>
            <Button title="sair" onPress={this.props.fechar}/>
          </View>
        
    )
  }
}
 





