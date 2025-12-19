import {View,Text,StyleSheet,FlatList} from "react-native";
import React,{useState} from "react";
import { useExpense } from "@/context/ExpenseContext";
import ExpenseForm from "@/components/ExpenseForm";
//import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
import ExpenseItem from "@/components/ExpenseItem";
import BalanceSummary from "@/components/BalanceSummary";
import { calculateTotals } from "@/utility/helpers";
import  {fillterByMonth}  from  "../utility/dataHelpers";
import MonthSelector from "../components/MonthSelector"
const HomeScreen:React.FC =()=>{
   const {expense} = useExpense();
  
         const [month,setMonth] = useState<number>(new Date().getMonth());
         const year = new Date().getFullYear();
         const filterdExpenses = fillterByMonth(expense,month,year)
          const {income,expens,Balance} = calculateTotals(filterdExpenses)
       return(
          <View style={styles.container}>
            <Text style={styles.title}>Expense-tracker</Text>
            <MonthSelector month={month} setMonth={setMonth}></MonthSelector>
            <BalanceSummary income={income} expens={expens} Balance={Balance}/>
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