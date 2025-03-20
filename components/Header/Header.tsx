import { StyleSheet, Text, View} from 'react-native';
export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Só Viagens</Text>
    </View>
);
}

const styles = StyleSheet.create({
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
})