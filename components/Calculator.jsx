'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("en-IN", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Calculator = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(9);
  const [tenure, setTenure] = useState(240);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  useEffect(() => {
    const r = interestRate / 12 / 100;
    const n = tenure;
    const emi =
      loanAmount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    const totalAmount = emi * n;
    const totalInterestPayment = totalAmount - loanAmount;

    setEmi(Math.round(emi));
    setTotalInterest(Math.round(totalInterestPayment));
    setTotalPayment(Math.round(totalAmount));

    // Calculate amortization schedule
    let balance = loanAmount;
    let totalPrincipal = 0;
    let schedule = [];
    const paymentsPerYear = 12;
    const yearsTotal = Math.ceil(tenure / paymentsPerYear);

    for (let year = 1; year <= yearsTotal; year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;

      for (let month = 1; month <= paymentsPerYear; month++) {
        if (balance <= 0) break;

        let interest = balance * r;
        let principal = emi - interest;

        if (principal > balance) {
          principal = balance;
          interest = balance * r;
        }

        balance -= principal;
        yearlyPrincipal += principal;
        yearlyInterest += interest;
        totalPrincipal += principal;

        if (balance < 0.01) balance = 0; // Adjust for floating point errors
      }

      schedule.push({
        year: year + 2023,
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        totalPayment: Math.round(yearlyPrincipal + yearlyInterest),
        balance: Math.round(balance),
        loanPaidToDate: totalPrincipal / loanAmount,
      });

      if (balance <= 0) break;
    }

    setAmortizationSchedule(schedule);
  }, [loanAmount, interestRate, tenure]);

  const pieChartData = [
    { name: "Loan Amount", value: loanAmount },
    { name: "Total Interest", value: totalInterest },
  ];

  const handleInputChange = (setValue, max) => (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= max) {
      setValue(value);
    }
  };

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-6 space-y-8"
    >
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-bold text-center text-indigo-600 mb-8"
      >
        EMI Calculator
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-indigo-700">Input Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { label: "Loan Amount", value: loanAmount, setValue: setLoanAmount, max: 20000000, step: 100000, format: formatter.format },
              { label: "Interest Rate %", value: interestRate, setValue: setInterestRate, max: 30, step: 0.1, format: (v) => v.toFixed(1) + '%' },
              { label: "Tenure (Months)", value: tenure, setValue: setTenure, max: 360, step: 1, format: (v) => v },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {item.label}
                </label>
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-grow">
                    <Slider
                      value={[item.value]}
                      onValueChange={(value) => item.setValue(value[0])}
                      max={item.max}
                      step={item.step}
                      className="w-full"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-1/3">
                    <Input
                      type="number"
                      value={item.value}
                      onChange={handleInputChange(item.setValue, item.max)}
                      className="w-full text-right"
                      step={item.step}
                    />
                  </motion.div>
                </div>
                <div className="flex justify-between text-xs mt-1 text-gray-500">
                  <span>{item.format(0)}</span>
                  <span>{item.format(item.max / 2)}</span>
                  <span>{item.format(item.max)}</span>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-purple-700">Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                { label: "EMI (Monthly)", value: formatter.format(emi) },
                { label: "Total Interest", value: formatter.format(totalInterest) },
                { label: "Total Payment", value: formatter.format(totalPayment) },
                { label: "Interest to Principal", value: ((totalInterest / loanAmount) * 100).toFixed(2) + '%' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow"
                >
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="text-lg font-semibold text-indigo-600">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6"
            >
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    <Cell fill="#4F46E5" />
                    <Cell fill="#7C3AED" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </CardContent>
        </Card>
      </div>


      <Card className="mt-8 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-indigo-700">Amortization Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-indigo-100">Year</TableHead>
                  <TableHead className="bg-green-100">Principal (A)</TableHead>
                  <TableHead className="bg-orange-100">Interest (B)</TableHead>
                  <TableHead className="bg-yellow-100">Total Payment (A + B)</TableHead>
                  <TableHead className="bg-red-100">Balance</TableHead>
                  <TableHead className="bg-purple-100">Loan Paid To Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {amortizationSchedule.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{formatter.format(row.principal)}</TableCell>
                    <TableCell>{formatter.format(row.interest)}</TableCell>
                    <TableCell>{formatter.format(row.totalPayment)}</TableCell>
                    <TableCell>{formatter.format(row.balance)}</TableCell>
                    <TableCell>{percentFormatter.format(row.loanPaidToDate)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

    </motion.div>
  );
};

export default Calculator;