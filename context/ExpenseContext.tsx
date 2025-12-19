
import { createContext, useContext,useState } from "react";
import React,{useEffect}  from "react";
import { Expense } from "@/types/expense";
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface ExpenseContextType{
    expense:Expense[];
    addExpense:(expense:Expense)=>void ;
    deleteExpense:(id:string)=>void;
}

const ExpenseContext = createContext<ExpenseContextType|undefined>(undefined);
const Storage_Key ="EXPENSES_DATA";
export const ExpenseProvider:React.FC<{children:React.ReactNode}> = (
{children})=>{
      const [expense,setExpense] = useState<Expense[]>([])
      //  it loads data when app run
      useEffect(()=>{
        loadExpense();
      },[])
     // it saves data when expense changed
      useEffect(()=>{
        saveExpense(expense);
      },[expense])
     
     const loadExpense = async()=>{
        try{
         const storagedata = await AsyncStorage.getItem(Storage_Key);
         if(storagedata){
            setExpense(JSON.parse(storagedata))
         }
        }catch(e){
           console.log("Failed to load expense",e);
           
        }
     }
     
     const saveExpense = async(data:Expense[])=>{
          try{
             await AsyncStorage.setItem(Storage_Key,JSON.stringify(data));
            }
         catch(e){
            console.log("Failed to save Expense",e)
         }
     }
      const addExpense = (expense:Expense)=>{
            setExpense((prev)=>[...prev,expense]);
      };

      const deleteExpense = (id:string)=>{
         setExpense((prev)=>prev.filter((item)=>item.id!==id));
      }
    
    return(
        <ExpenseContext.Provider value={{expense,addExpense,deleteExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
};

export const useExpense = ():ExpenseContextType=>{
     const context = useContext(ExpenseContext);
     if(!context){
        throw new Error("useExpenses must be used within ExpenseProvider")
     }
     return context
}
