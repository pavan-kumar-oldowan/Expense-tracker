import { Expense } from "@/types/expense";
import {View,Text,StyleSheet} from "react-native";
interface BalanceSummaryProps{
    income:number,
    expens:number,
    Balance:number
}
export const BalanceSummary:React.FC<BalanceSummaryProps>=({income,expens,Balance})=>{
    return(
        <View style={styles.container}>
           <Text style={styles.balance}>{Balance}</Text> 
           <View style={styles.row}>
           <Text style={styles.income}>{income}</Text>
           <Text style={styles.expense}>{expens}</Text>
           </View>
        </View>
    )
}
export default BalanceSummary
const styles= StyleSheet.create({
    container:{
        paddingHorizontal:70,
        borderRadius:10,
        backgroundColor: "white",
        marginTop:10,
        marginBottom:15,
        borderColor:"#ccc",
        paddingVertical:20
       
    },
    balance:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:20,
        marginBottom:10
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        gap:40
       
    },
   income:{
      fontWeight:"bold",
      color:"green"
   } ,
   expense:{
    fontWeight:"bold",
    color:"red"
   } 
})