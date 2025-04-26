import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Post from './../components/Post/Post';
import rj from '../assets/rj.jpg';
import sp from '../assets/sp.jpg';

export default function Home() {


    return (
      //<></> fragment
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header/>
        <Post titulo="Rio de Janeiro" descricao="O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua do Cristo Redentor." imagem={rj} button="Saiba Mais" color='#023859'/>
        <Post titulo="São Paulo" descricao="São Paulo, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica." 
        imagem={sp} button="Excluir" color="black"/>
        <Footer />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });