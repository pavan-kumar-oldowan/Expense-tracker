import {View,Text,StyleSheet} from "react-native";
import React from "react";
import { useExpense } from "@/context/ExpenseContext";
const HomeScreen:React.FC =()=>{
     const {expense} = useExpense();
       return(
          <View style={styles.container}>
            <Text style={styles.title}>Expense-tracker</Text>
            <Text>Total Records:{expense.length}</Text>
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