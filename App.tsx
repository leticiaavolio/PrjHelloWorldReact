import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.body}>
      <Text>Hello, World!</Text>
      <Text>Já já, Lanchão 🌭🍔🥪🥟🥡🥧</Text>
      <Text>Ligar</Text>
      <Switch/>
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
  body:{
    flex:3,
    justifyContent: 'center',
  },
  header:{
    width: '100%',
    flex:1,
    backgroundColor:'#085A8C',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:22,
  },
  headerText:{
    color:'#fff',
    fontSize:30,
  }
});
