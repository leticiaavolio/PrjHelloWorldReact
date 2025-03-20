import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
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
})