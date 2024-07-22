import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PMAYDashboard = () => {
  const categories = [
    {
      type: "EWS/LIG",
      income: "Upto 6,00,000 p.a.",
      carpetArea: "60 sqm",
      interestSubsidy: "6.50%",
      maxLoan: "Rs 6,00,000",
      loanReason: "Purchase Const/Ext.",
      maxSubsidy: "Rs 2.67 Lakhs"
    },
    {
      type: "MIG 1",
      income: "Rs 6,00,001 to Rs 12,00,000",
      carpetArea: "120 sqm",
      interestSubsidy: "4.00%",
      maxLoan: "Rs 9,00,000",
      loanReason: "Purchase/ Construction",
      maxSubsidy: "Rs 2.35 Lakhs"
    },
    {
      type: "MIG 2",
      income: "Rs 12,00,001 to 18,00,000",
      carpetArea: "150 sqm",
      interestSubsidy: "3.00%",
      maxLoan: "Rs 12,00,000",
      loanReason: "Purchase/ Construction",
      maxSubsidy: "Rs 2.30 Lakhs"
    }
  ];

  const schemeSpecifics = [
    "Aadhar number(s) of the beneficiary family are mandatory for MIG category.",
    "The interest subsidy will be available for a maximum 20 year loan tenure or the loan tenure whichever is lower.",
    "The interest subsidy will be credited upfront to the loan account of beneficiaries thereby ensuring reduced effective housing loan and Equated Monthly Instalment (EMI).",
    "The Net Present Value (NPV) of the interest subsidy will be calculated at a 9% discount rate.",
    "The additional loan beyond the specified limits, if any will be given at non-subsidized rate.",
    "There is no cap on the loan amount or the cost of the property"
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-blue-600">Pradhan Mantri Awas Yojana (PMAY)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-center mb-4">
            "Sabka Saat, Sabke Vikas" - Making affordable housing a reality
          </p>
          <p className="text-gray-700">
            The Pradhan Mantri Awas Yojana is a government initiative aimed at providing central assistance to Urban Local Bodies for the rehabilitation of existing slum dwellers using land as a resource through private participation. The PMAY plan is to deliver 2 crore permanent houses by 2022 in urban as well as rural zones.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">The Scheme</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Pradhan Mantri Awas Yojana enables housing loan seekers to receive subsidies of up to Rs 2.67 lakhs on their loan amount. Here's explaining the PMAY's credit linked subsidy scheme in detail for your easy reference.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category Type</TableHead>
                <TableHead>Household Income</TableHead>
                <TableHead>Carpet Area</TableHead>
                <TableHead>Interest Subsidy</TableHead>
                <TableHead>Subsidy on max loan of</TableHead>
                <TableHead>Loan Reason</TableHead>
                <TableHead>Max Subsidy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{category.type}</TableCell>
                  <TableCell>{category.income}</TableCell>
                  <TableCell>{category.carpetArea}</TableCell>
                  <TableCell>{category.interestSubsidy}</TableCell>
                  <TableCell>{category.maxLoan}</TableCell>
                  <TableCell>{category.loanReason}</TableCell>
                  <TableCell className="font-semibold">{category.maxSubsidy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="mt-4 text-sm text-gray-600">
            The beneficiary family will comprise a husband, wife and unmarried children. Married children will be treated as separate family.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">PMAY Scheme Specifics</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {schemeSpecifics.map((specific, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>Specific {index + 1}</AccordionTrigger>
                <AccordionContent>{specific}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default PMAYDashboard;