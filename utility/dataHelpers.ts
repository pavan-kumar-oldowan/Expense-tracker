import {Expense} from "../types/expense";
export const fillterByMonth =(expense:Expense[],month:number,year:number)=>{
       return (
          expense.filter((item)=>{
            const date = new Date(item.date);
            return (
                date.getMonth()===month && date.getFullYear()===year
            );
          })
       )
}  