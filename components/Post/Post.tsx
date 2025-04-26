import { StyleSheet, Text, View, Image} from 'react-native';
import Button from '../Button/Button';
import React from "react";

type Prop ={
  titulo:string,
  descricao:string,
  imagem: object,
  button: string,
  color:string,
}


export default function Post(prop: Prop) {

  return (
    <View style={styles.post}>
        <Text style={styles.headerPost}>{prop.titulo}</Text>
        <Text style={styles.textPost}>{prop.descricao}</Text>
        <Image source={prop.imagem} style={styles.image} />
        <Button texto={prop.button} alerta={prop.titulo} corFundo={prop.color}/>
    </View>
);
}

const styles = StyleSheet.create({
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
      
      image:{
        width: '90%', 
        height: 100, 
        borderRadius: 10, 
        marginBottom: 10,
        alignSelf:'center',
      },
})