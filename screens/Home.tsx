import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Post from './../components/Post/Post';

export default function Home() {
    return (
      //<></> fragment
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header/>
        <Post titulo="Rio de Janeiro" descricao="O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua do Cristo Redentor."/>
        <Post titulo="São Paulo" descricao="São Paulo, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica."/>
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