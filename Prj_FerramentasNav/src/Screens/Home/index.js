import { StyleSheet, View, FlatList } from 'react-native';
import Header from '../../components/header';
import Produtos from '../../data/produtos'
import BannerProdutos from '../../components/bannerProdutos';
import CardProdutos from '../../components/cardProdutos';

export default function App() {

  return (
    
    <View style={styles.container}>
      <Header></Header>
      <BannerProdutos></BannerProdutos>
      
      <View style={styles.card}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Produtos}
            keyExtractor={(item) => item.id}
            renderItem = { ({item}) => (

          <CardProdutos
              titulo = {item.nome}
              marca = {item.marca}
              cor = {item.cor}
              quantidade = {item.quantidade}
              tamanho = {item.tamanho}
              preco = {item.preco}
              imagem = {item.imagem}
          />
        )} 
        />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#751010',
    alignItems:"center"
  },

  card: {
    width:"95%", 
    backgroundColor:'#000000', 
    borderRadius:'10px', 
    marginTop:'5%',
  }
});