import {View,Text,StyleSheet,FlatList} from "react-native";
import React from "react";
import { useExpense } from "@/context/ExpenseContext";
import ExpenseForm from "@/components/ExpenseForm";
//import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import ExpenseItem from "@/components/ExpenseItem";
const HomeScreen:React.FC =()=>{
     const {expense} = useExpense();
       return(
          <View style={styles.container}>
            <Text style={styles.title}>Expense-tracker</Text>
            <ExpenseForm/>
            <FlatList 
               data={expense}
               keyExtractor={(item)=>item.id}
               renderItem={({item})=><ExpenseItem item={item}/>}
            />
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