import { Expense } from "@/types/expense";
export const calculateTotals = (expense:Expense[])=>{
    const income = expense.filter((item)=>item.type==="income")
                           .reduce((sum,item)=>sum+item.amount,0);
    const expens= expense.filter((item)=>item.type==="expense")
                          .reduce((sum,item)=>sum+item.amount,0)
     
    return({
        income,
        expens,
        Balance:income-expens
    }
    )
}
