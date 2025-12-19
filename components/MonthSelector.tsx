import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";

interface MonthSelectorProps {
    month:number,
    setMonth:(month:number)=>void
}

const months= [
      "Jan","Feb","Mar","Apr","May","June",
      "July","Aug","Sep","Oct","Nov","Dec"
]
 const MonthSelector:React.FC<MonthSelectorProps>=({month,setMonth})=>{
    return(
        <View style={styles.container}>
           <TouchableOpacity onPress={() => setMonth((month + 11) % 12)}>

                <Text style={styles.btn}>◀</Text>
            </TouchableOpacity>
            <Text style={styles.month}>{months[month]}</Text>
            <TouchableOpacity onPress={()=>setMonth((month+1)%12)}>
                <Text style={styles.btn}>▶</Text>
            </TouchableOpacity>
        </View>
    )
}
export default MonthSelector;
const styles= StyleSheet.create({
    container:{
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
         marginBottom:10
    },
    btn:{
        fontSize:18,
        paddingHorizontal:10
    },
    month:{
        fontSize:18,
        fontWeight:"bold"
    }
})