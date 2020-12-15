import React, {Component} from 'react'

import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

// https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=a865718d6b6cf3059f4e

class Conversor extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>USD para BRL</Text>

                <TextInput
                placeholder="Valor a ser convertido"
                style={styles.areaInput}
                onChangeText={() => {}}
                />

                <TouchableOpacity style={styles.botaoArea}>
                    <Text style={styles.botaoTexto}>Converter</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{

   } 
})

export default Conversor