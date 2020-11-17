import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {     
      img: require('./android/app/src/cronometro.png'),
      numero: 0,
      botao: "VAI",
      ultimo: null

    }

    //Variavel do timer relogio
    this.timer = null;

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)

   

   
  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
      this.setState({botao: "VAI"})
    }else{
      this.timer = setInterval(()=>{
        this.setState({numero: this.state.numero + 0.1})
        this.setState({botao: "PARAR"})
      }, 100)
    }
  }

  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null
    }

    
    this.setState({numero:0, botao: "VAI", ultimo: this.state.numero})
  

  }


  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cronometro} source={this.state.img} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltimo}>
    <Text style={styles.textoCorrida}>{this.state.ultimo > 0 ? this.state.ultimo.toFixed(2) + 's' : ''}</Text>
        </View>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  cronometro: {
   
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  } ,
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color: '#00aeef'
  },
  areaUltimo:{
    marginTop: 40

  },
  textoCorrida:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }

});





export default App;