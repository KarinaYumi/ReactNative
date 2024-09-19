import React,{Fragment} from 'react';
import { Image,Text} from 'react-native';
import styles from './style';


export default function BannerProdutos(){
    return(
        <>
            <Text style = {styles.textBanner}> Mais Vendidos </Text>
            <Image style = {styles.imagemBanner} source = {require(`../../Img/fundo.jpg`)} />
        </>
    );  
}