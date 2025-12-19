import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

interface ExpenseChartProps {
  income: number;
  expense: number;
}

const screenWidth = Dimensions.get('window').width;

const ExpenseChart: React.FC<ExpenseChartProps> = ({
  income,
  expense,
}) => {
  const data = [
    {
      name: 'Income',
      amount: income,
      color: '#51cf66',
      legendFontColor: '#333',
      legendFontSize: 14,
    },
    {
      name: 'Expense',
      amount: expense,
      color: '#ff6b6b',
      legendFontColor: '#333',
      legendFontSize: 14,
    },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: () => '#000',
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default ExpenseChart;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
