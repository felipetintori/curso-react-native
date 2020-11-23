import React, { Component } from 'react'

import { View, StyleSheet, Text } from 'react-native'
import Slider from "@react-native-community/slider"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      valor: 0
    }
  }
  

  render() {
   
    return (
      <View style={styles.container}>
        
        <Slider minimumValue={0} minimumTrackTintColor="#00FF00" maximumTrackTintColor="#FF0000" value={this.state.valor} maximumValue={100} onValueChange={valorSelecionado => this.setState({valor: valorSelecionado})} />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          Você tem {this.state.valor.toFixed(1)} KG
        </Text>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20
  },
  
})



export default App;

