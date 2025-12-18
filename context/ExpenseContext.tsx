
import { createContext, useContext,useState } from "react";
import React  from "react";
import { Expense } from "@/types/expense";

export interface ExpenseContextType{
    expense:Expense[];
    addExpense:(expense:Expense)=>void ;
}

const ExpenseContext = createContext<ExpenseContextType|undefined>(undefined);

export const ExpenseProvider:React.FC<{children:React.ReactNode}> = (
{children})=>{
      const [expense,setExpense] = useState<Expense[]>([])

      const addExpense = (expense:Expense)=>{
            setExpense((prev)=>[...prev,expense]);
      };
    
    return(
        <ExpenseContext.Provider value={{expense,addExpense}}>
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
