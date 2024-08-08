'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { ChevronDown, ChevronUp } from "lucide-react";

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

  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(9);
  const [tenure, setTenure] = useState(240);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [expandedYears, setExpandedYears] = useState({});

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
      let monthlyData = [];

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

        monthlyData.push({
          month: month,
          principal: Math.round(principal),
          interest: Math.round(interest),
          totalPayment: Math.round(principal + interest),
          balance: Math.round(balance),
          loanPaidToDate: totalPrincipal / loanAmount,
        });
      }

      schedule.push({
        year: year + 2023,
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        totalPayment: Math.round(yearlyPrincipal + yearlyInterest),
        balance: Math.round(balance),
        loanPaidToDate: totalPrincipal / loanAmount,
        monthlyData: monthlyData,
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

  const toggleYearExpansion = (year) => {
    setExpandedYears(prev => ({ ...prev, [year]: !prev[year] }));
  };

  if (!isMounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto p-6 space-y-8 bg-gradient-to-br from-gray-100 to-gray-100 min-h-screen"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-5xl font-bold text-center text-indigo-800 mb-12"
      >
        EMI Calculator
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-6">
            <h2 className="text-2xl font-semibold text-white text-center">Input Details</h2>
          </div>
          <div className="p-6 space-y-6">
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
                  <motion.div whileHover={{ scale: 1.05 }} className="flex-grow">
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
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-6">
            <h2 className="text-2xl font-semibold text-white text-center">Results</h2>
          </div>
          <div className="p-6 space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
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
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-100 p-4 rounded-lg"
                >
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="text-lg font-semibold text-indigo-700">{item.value}</p>
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
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-12 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl overflow-hidden"
      >
        <motion.div
          className="bg-gradient-to-r from-teal-400 to-teal-600 p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center tracking-wide">
            Amortization Schedule
          </h2>
        </motion.div>
        <div className="p-6 overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-indigo-100 font-semibold text-indigo-800">Year</TableHead>
                <TableHead className="bg-green-100 font-semibold text-green-800">Principal (A)</TableHead>
                <TableHead className="bg-orange-100 font-semibold text-orange-800">Interest (B)</TableHead>
                <TableHead className="bg-yellow-100 font-semibold text-yellow-800">Total Payment (A + B)</TableHead>
                <TableHead className="bg-red-100 font-semibold text-red-800">Balance</TableHead>
                <TableHead className="bg-purple-100 font-semibold text-purple-800">Loan Paid To Date</TableHead>
                <TableHead className="bg-blue-100 font-semibold text-blue-800">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {amortizationSchedule.map((row, index) => (
                  <React.Fragment key={index}>
                    <motion.tr
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.02, backgroundColor: "#F3F4F6" }}
                      className="hover:shadow-md transition-all duration-300 ease-in-out"
                    >
                      <TableCell className="font-medium">{row.year}</TableCell>
                      <TableCell>{formatter.format(row.principal)}</TableCell>
                      <TableCell>{formatter.format(row.interest)}</TableCell>
                      <TableCell>{formatter.format(row.totalPayment)}</TableCell>
                      <TableCell>{formatter.format(row.balance)}</TableCell>
                      <TableCell>{percentFormatter.format(row.loanPaidToDate)}</TableCell>
                      <TableCell>
                        <motion.button
                          onClick={() => toggleYearExpansion(row.year)}
                          className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {expandedYears[row.year] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </motion.button>
                      </TableCell>
                    </motion.tr>
                    {expandedYears[row.year] && (
                      <motion.tr
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TableCell colSpan={7} className="p-0">
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="bg-gray-50 p-4 rounded-lg shadow-inner"
                          >
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-sm font-semibold text-gray-700">Month</TableHead>
                                  <TableHead className="text-sm font-semibold text-gray-700">Principal</TableHead>
                                  <TableHead className="text-sm font-semibold text-gray-700">Interest</TableHead>
                                  <TableHead className="text-sm font-semibold text-gray-700">Total Payment</TableHead>
                                  <TableHead className="text-sm font-semibold text-gray-700">Balance</TableHead>
                                  <TableHead className="text-sm font-semibold text-gray-700">Loan Paid To Date</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {row.monthlyData.map((month, monthIndex) => (
                                  <motion.tr
                                    key={monthIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: monthIndex * 0.03, duration: 0.2 }}
                                    className="text-sm hover:bg-gray-100 transition-colors"
                                  >
                                    <TableCell>{month.month}</TableCell>
                                    <TableCell>{formatter.format(month.principal)}</TableCell>
                                    <TableCell>{formatter.format(month.interest)}</TableCell>
                                    <TableCell>{formatter.format(month.totalPayment)}</TableCell>
                                    <TableCell>{formatter.format(month.balance)}</TableCell>
                                    <TableCell>{percentFormatter.format(month.loanPaidToDate)}</TableCell>
                                  </motion.tr>
                                ))}
                              </TableBody>
                            </Table>
                          </motion.div>
                        </TableCell>
                      </motion.tr>
                    )}
                  </React.Fragment>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Calculator;