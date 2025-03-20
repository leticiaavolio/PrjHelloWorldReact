import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Post from './components/Post/Post';

export default function App() {
  return (
    //<></> fragment
    <View style={styles.container}>

      <StatusBar style="auto" />

      {/* Aqui era pra ser o header */}
      <Header/>

      <Post />
      <Post />
      

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
