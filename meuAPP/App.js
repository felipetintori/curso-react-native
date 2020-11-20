import React, { Component } from 'react'
import {Picker} from '@react-native-picker/picker';
import { View, StyleSheet, Text } from 'react-native'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: "Strognoff", valor: 35.90 },
        {key: 2, nome: "Calabresa", valor: 55.90 },
        {key: 3, nome: "Brigadeiro", valor: 35.90 },
      ]
    }
  }
  

  render() {
    let pizzasItem = this.state.pizzas.map((v, k)=>{
      return <Picker.item key={k} value={k} label={v.nome} />
    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker selectedValue={this.state.pizza} onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue})}>
          {pizzasItem}
        </Picker>
        <Text style={styles.pizzas}>Voce escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor}</Text>

      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas:{
    marginTop:15,
    fontSize: 25,
    textAlign: 'center'
  }
})



export default App;

