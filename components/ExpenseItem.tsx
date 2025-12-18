import React from "react";
import {View,Text,StyleSheet} from "react-native";

import { Expense } from "@/types/expense";

interface ExpenseItemProp{
    item :Expense;
}
 
 const ExpenseItem:React.FC<ExpenseItemProp>=({item})=>{
        
    return(
        <View style={[styles.item,item.type==="income"?styles.income:styles.expense]} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.amount}>{item.type==="income"?"+":"-"}₹{item.amount}</Text>
        </View>
    )
}
export default ExpenseItem
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
