import { LinearGradient } from 'expo-linear-gradient';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import estilo from "../estilos";
import React from 'react';

export default function Body(){
    return(
        
    <View style = {estilo.box}>
      <Text style = {estilo.titulo}>LOGIN</Text>
      
        <View style = {estilo.viewIcons}>
          <Feather name="user" size={30} color="black" />
          <TextInput style = {estilo.input} placeholder = 'E-mail' />
        </View>
  
        <View style = {estilo.viewIcons}>
          <Ionicons name="key" size={30} color="black" />
          <TextInput style = {estilo.input} placeholder = 'Senha' />
        </View>

        <TouchableOpacity style= {{width: '80%'}}>
            <LinearGradient colors = {['#ff709b','white']}
              style = {estilo.button}>
                <Text style = {estilo.text}> Entrar </Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    
    )
}