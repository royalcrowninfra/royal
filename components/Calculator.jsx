"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell } from "recharts";

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const Calculator = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [loanAmount, setLoanAmount] = useState(2755000);
  const [interestRate, setInterestRate] = useState(7);
  const [tenure, setTenure] = useState(158);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

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
  }, [loanAmount, interestRate, tenure]);

  const pieChartData = [
    { name: "Loan Amount", value: loanAmount },
    { name: "Total Interest", value: totalInterest },
  ];

  if (!isMounted) return null;

  return (
    <div className='max-w-3xl mx-auto p-6 rounded-lg shadow-lg'>
      <h1 className='text-2xl font-bold text-center text-red-600 mb-6'>
        EMI Calculator
      </h1>

      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Loan Amount
          </label>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            max={6000000}
            step={10000}
            className='w-full'
          />
          <div className='flex justify-between text-xs mt-1'>
            <span>0</span>
            <span>15L</span>
            <span>30L</span>
            <span>45L</span>
            <span>60L</span>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Interest Rate %
          </label>
          <Slider
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            max={20}
            step={0.1}
            className='w-full'
          />
          <div className='flex justify-between text-xs mt-1'>
            <span>0%</span>
            <span>5%</span>
            <span>10%</span>
            <span>15%</span>
            <span>20%</span>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Tenure (Months)
          </label>
          <Slider
            value={[tenure]}
            onValueChange={(value) => setTenure(value[0])}
            max={360}
            step={1}
            className='w-full'
          />
          <div className='flex justify-between text-xs mt-1'>
            <span>0</span>
            <span>90</span>
            <span>180</span>
            <span>270</span>
            <span>360</span>
          </div>
        </div>
      </div>

      <div className='mt-8 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 bg-green-700 text-white p-4 rounded-lg'>
          <table className='w-full'>
            <tbody>
              <tr>
                <td className='py-2'>Loan Amount</td>
                <td className='text-right'>{formatter.format(loanAmount)}</td>
              </tr>
              <tr>
                <td className='py-2'>Interest %</td>
                <td className='text-right'>{interestRate.toFixed(1)}%</td>
              </tr>
              <tr>
                <td className='py-2'>Tenure (Months)</td>
                <td className='text-right'>{tenure}</td>
              </tr>
              <tr>
                <td className='py-2'>EMI (Monthly)</td>
                <td className='text-right'>{formatter.format(emi)}</td>
              </tr>
              <tr>
                <td className='py-2'>Total Interest</td>
                <td className='text-right'>
                  {formatter.format(totalInterest)}
                </td>
              </tr>
              <tr>
                <td className='py-2'>Total Payment</td>
                <td className='text-right'>{formatter.format(totalPayment)}</td>
              </tr>
              <tr>
                <td className='py-2'>(Loan Amount + Interest)</td>
                <td className='text-right'></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0'>
          <PieChart width={200} height={200}>
            <Pie
              data={pieChartData}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill='#8884d8'
              dataKey='value'
            >
              <Cell fill='#0000FF' />
              <Cell fill='#FF0000' />
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
