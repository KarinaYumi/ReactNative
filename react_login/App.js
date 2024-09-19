import React from 'react';
import {View} from 'react-native';
import estilo from './src/estilos';
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';

export default function App() {
  return (
    <View style = {estilo.container}> 

      <Header></Header>
      <Body></Body>
      <Footer></Footer>

    </View>
  );
}

