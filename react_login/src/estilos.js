import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor:"#D3D3D3"
    },

    gradienteBackgound:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:300,
        alignItems:'center',
        justifyContent:'center'
    },

    titulo:{
        fontWeight: 'bold',
        fontSize:40,
        color:'black',
        marginTop: 20
    },

    box:{
        marginTop: 0,
        alignItems:'center',
        borderRadius: 5,
        backgroundColor: 'white',
        width: "85%",
        height: 400
    },
    
    input:{
        borderRadius: 5,
        width: '80%',
        marginLeft: 10,
        padding: 15,
        borderWidth: 1

    },

    viewIcons:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 35,
    },

    button:{
        padding: 15,
        marginTop: 40,
        borderRadius: 10,
        alignSelf:'center',
        width: 200,
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        color:'black'
    },

    textEsqSenha:{
        fontSize: 20,
        color:'#ff709b'
    },

    textCadastro:{
        fontSize: 17,
        color:'blue',
        alignSelf: 'center'
    },

    img:{
        width:220,
        height:220
    }
})

export default estilo;