import React  from 'react';
import HomeScreen from "../../screens/HomeScreen";
import { ExpenseProvider } from '@/context/ExpenseContext';

export default function App(): JSX.Element {
  return(
    <ExpenseProvider>
         <HomeScreen />;
    </ExpenseProvider>
  )
   
}
