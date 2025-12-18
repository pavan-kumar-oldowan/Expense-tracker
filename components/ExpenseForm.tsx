import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Expense } from '../types/expense';
import { useExpense } from '../context/ExpenseContext';

const ExpenseForm: React.FC = () => {
  const { addExpense } = useExpense();

  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const submitHandler = ()=>{
     if(!title || !amount) return;
     
      const newExpense:Expense ={
          id:Date.now().toString(),
          title,
          amount:Number(amount),
          type,
          date:new Date().toISOString()
      }
      addExpense(newExpense);
      setTitle("");
      setAmount("")
  }

  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Add Transaction</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[styles.typeBtn, type === 'income' && styles.activeIncome]}
          onPress={() => setType('income')}
        >
          <Text>Income</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeBtn, type === 'expense' && styles.activeExpense]}
          onPress={() => setType('expense')}
        >
          <Text>Expense</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={submitHandler}>
        <Text style={styles.submitText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseForm;
const styles = StyleSheet.create({
  form: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  typeBtn: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
  },
  activeIncome: {
    backgroundColor: '#b2f2bb',
  },
  activeExpense: {
    backgroundColor: '#ffc9c9',
  },
  submitBtn: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
