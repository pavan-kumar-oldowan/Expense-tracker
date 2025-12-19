import React ,{memo}from "react";
import {View,Text,StyleSheet, TouchableOpacity} from "react-native";

import { Expense } from "@/types/expense";
import { useExpense } from "@/context/ExpenseContext";

interface ExpenseItemProp{
    item :Expense;
}
 
 const ExpenseItem:React.FC<ExpenseItemProp>=({item})=>{
       const {deleteExpense} = useExpense(); 
    return(
        <View style={[styles.item,item.type==="income"?styles.income:styles.expense]} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.amount}>{item.type==="income"?"+":"-"}₹{item.amount}</Text>
            <TouchableOpacity onPress={()=>{deleteExpense(item.id)}}>
                <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}
export default memo(ExpenseItem)
const styles=StyleSheet.create({
     
    item:{
       padding:15,
       borderRadius:10,
       flexDirection:"row",
       justifyContent:"space-between",
       marginBottom:10
    },
    income: {
    backgroundColor: '#d3f9d8',
    },
    delete:{
      color:"red",
      fontWeight:"bold"
    },
    expense: {
    backgroundColor: '#ffe3e3',
     },
     title:{
         fontWeight:"bold"
     },
     amount:{
        fontWeight:"bold"
     }
})
