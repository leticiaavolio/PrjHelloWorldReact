import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import React,{useState} from "react";


export default function Button() {

  const [button, setLido] = useState("Saiba Mais")

  function SaibaMais(){
    alert("Você clicou no post")
    setLido("Lido")
  }
  return (
    <TouchableOpacity style={styles.button} onPress={SaibaMais}>
        <Text style={styles.buttonText}>{button}</Text>
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