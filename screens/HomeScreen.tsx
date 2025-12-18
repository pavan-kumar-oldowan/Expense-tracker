import {View,Text,StyleSheet} from "react-native";
import React from "react"
const HomeScreen:React.FC =()=>{
       return(
          <View style={styles.container}>
            <Text style={styles.title}>Expense-tracker</Text>
          </View>
       )
}
const styles = StyleSheet.create({
     container:{
          flex:1,
          justifyContent:"center",
          alignItems:"center"
     },
     title:{
        fontSize:22,
        fontWeight:"bold"
     }

})
export default HomeScreen;