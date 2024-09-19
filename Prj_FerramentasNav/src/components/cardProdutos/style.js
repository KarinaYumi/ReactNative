import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    containerProdutos:{
        paddingTop:20,
        paddingBottom:16,
        width:240,
        paddingLeft:20
    },

    tituloProdutos:{
        color: '#751010',
        fontSize: 20,
        paddingTop: 8,
        fontWeight:'Bold'
    },
    marcaProdutos:{
        fontSize:13,
        color:'#FFC433',
        paddingLeft:2,
        paddingBottom:12
    },
    corProdutos:{
        fontSize:12,
        color:'#fff',
        paddingLeft:4,

    },
    quantidadeProdutos:{
        fontSize:12,
        color:'#fff',
        paddingLeft:4
    },
    tamanhoProdutos:{
        fontSize:12,
        color:'#fff',
        paddingLeft:4
    },
    precoProdutos:{
        fontSize:18,
        color:'#fff',
        paddingLeft:2,
        paddingTop: 12,
        fontWeight:'Bold',
        color:'#751010'
    },
    imagemProdutos:{
        width:'90%',
        height:200,
        borderRadius:8
    }
})

export default styles;