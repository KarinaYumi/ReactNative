import React from "react";
import {View, Image, Text} from 'react-native'
import { useRoute } from "@react-navigation/native";
import estilo from './style'

export default function Details(){

const route = useRoute();
    return(
        <View>
            <Image style = {estilo.imagemProduto} source = {require(`../../Img/${route.params.imagem}`)}/> 
            <Text style = {estilo.tituloProduto} > {route.params.titulo}</Text> 
            <Text style = {estilo.tituloProduto} > {route.params.marca}</Text>
            <Text style = {estilo.tituloProduto} > {route.params.cor}</Text>
            <Text style = {estilo.tituloProduto} > {route.params.quantidade}</Text>
            <Text style = {estilo.tituloProduto} > {route.params.tamanho}</Text>
            <Text style = {estilo.tituloProduto} > {route.params.preco}</Text>
        </View>
    );
}
