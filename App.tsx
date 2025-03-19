import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
export default function App() {
  return (
    //<></> fragment
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Só Viagens</Text>
      </View>

      <View style={styles.post}>
      <Text style={styles.headerPost}>São Paulo</Text>
      <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam, odit consectetur dolore tempore autem eaque reprehenderit voluptatum fuga.</Text>
      <Image source={require('./assets/sp.jpg')} style={styles.image} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.post}>
      <Text style={styles.headerPost}>Rio de Janeiro</Text>
      <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam, odit consectetur dolore tempore autem eaque reprehenderit voluptatum fuga.</Text>
      <Image source={require('./assets/rj.jpg')} style={styles.image} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por Leticia Avolio</Text>
      </View>

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
  header:{
    width: '100%',
    flex:0.5,
    backgroundColor:'#023859',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:22,
  },
  headerText:{
    color:'#fff',
    fontSize:30,
  },
  post:{
    flex:1.5,
    width:'100%',
  },
  headerPost:{
    color: '#000',
    fontSize:20,
    textAlign:'center',
    backgroundColor:'#0487D9',
    paddingVertical:12,
  },
  textPost:{
    color: '#023859',
    fontSize:15,
    padding:12,
  },
  button:{
    width:160,
    borderRadius:8,
    padding: 6,
    backgroundColor:'#023859',
    alignSelf:'flex-end',
    marginHorizontal:12,
  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  },
  footer:{
    width: '100%',
    flex:0.25,
    backgroundColor:'#023859',
    justifyContent:'center',
    alignItems:'center',
  },
  footerText:{
    color:'#fff',
    fontSize:18,
  },
  image:{
    width: '90%', 
    height: 100, 
    borderRadius: 10, 
    marginBottom: 10,
    alignSelf:'center',
  },
});
