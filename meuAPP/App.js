import React, { Component } from 'react'
import Pessoas from './src/Pessoas/Pessoas'
import { View, Text, StyleSheet, FlatList } from 'react-native'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      feed:[
        {id: 1, nome: "Felipe", idade: 29, email: "felipe_tintori@hotmail.com"},
        {id: 2, nome: "Regina", idade: 58, email: "regina_tintori@hotmail.com"},
        {id: 3, nome: "Mauricio", idade: 62, email: "mauricio_tintori@hotmail.com"},
        {id: 4, nome: "Bruno", idade: 28, email: "bruno_tintori@hotmail.com"}
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <FlatList
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Pessoas data={item} /> }
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});

export default App;

