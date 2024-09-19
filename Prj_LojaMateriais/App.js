import { StyleSheet, View, FlatList } from 'react-native';
import BannerProdutos from './src/components/bannerProdutos';
import Filmes from './src/data/produtos';
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardProdutos from './src/components/cardProdutos';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerProdutos></BannerProdutos>
      
      <View style={styles.card}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Filmes}
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
