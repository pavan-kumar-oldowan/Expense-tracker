import React  from 'react';
import HomeScreen from "../../screens/HomeScreen";
import { ExpenseProvider } from '@/context/ExpenseContext';
import { KeyboardAvoidingView, Platform } from 'react-native';
export default function App(): JSX.Element {
  return(
      <KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === 'ios' ? 'padding' : undefined}
>
  {/* App Content */}
  <ExpenseProvider>
         <HomeScreen />;
    </ExpenseProvider>
  </KeyboardAvoidingView>
  )
   
}




