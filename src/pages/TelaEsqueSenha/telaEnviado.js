import {View,Text,StyleSheet} from 'react-native'
function TelaEnviado() {
  return (
   <View style={styles.conteiner}>
      <Text>Visite seu email para verifical  </Text>
    </View>
  );
}
const styles=StyleSheet.create({
conteiner:{
    flex:1,
   /// backgroundColor:'#dd0000'
}



});
export default TelaEnviado;