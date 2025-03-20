import { StyleSheet, Text, View, Image} from 'react-native';
import Button from '../Button/Button';

export default function Post() {
  return (
    <View style={styles.post}>
        <Text style={styles.headerPost}>Rio de Janeiro</Text>
        <Text style={styles.textPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam, odit consectetur dolore tempore autem eaque reprehenderit voluptatum fuga.</Text>
        <Image source={require('../../assets/rj.jpg')} style={styles.image} />
        <Button />
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