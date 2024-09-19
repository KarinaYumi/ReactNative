import React from "react";
import estilo from "../estilos";
import {View,Text} from 'react-native';

export default function Footer(){
    return(
    <View>
        <Text style = {estilo.textEsqSenha}>Esqueceu a senha?</Text>
        <Text style = {estilo.textCadastro}>Cadastre-se</Text>
    </View>
    )
}
