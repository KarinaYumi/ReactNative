import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';
import estilo from "../estilos";

export default function Header(){
    return(
        
    <LinearGradient 
        colors = {['white', '#91e0f2']}
        style = {estilo.gradienteBackgound}>
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087579.png'}} style = {estilo.img} />
    </LinearGradient>
    )
}