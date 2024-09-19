import React from "react";
import {View, Image, Text} from 'react-native'
import { useRoute } from "@react-navigation/native";
import estilo from './style';

export default function Details(){

const route = useRoute();
    return(
        <View>
            <Image style = {estilo.imagemProduto} source = {require(`../../Img/${route.params.imagem}`)}/> 
            <Text style = {estilo.tituloProduto} > {route.params.titulo}</Text> 
            <Text style = {estilo.marcaoProduto} > {route.params.marca}</Text>
            <Text style = {estilo.corProduto} > {route.params.cor}</Text>
            <Text style = {estilo.quantidadeoProduto} > {route.params.quantidade}</Text>
            <Text style = {estilo.tamanhoProduto} > {route.params.tamanho}</Text>
            <Text style = {estilo.precoProduto} > {route.params.preco}</Text>
        </View>

    );
}

