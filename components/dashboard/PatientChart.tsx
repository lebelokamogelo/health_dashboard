"use client";
import Chart from "react-google-charts";
import { Card } from "../ui/card";
import { useState } from "react";
import { Code } from "react-content-loader";

const data = [
  ["Months", "Patients ..."],
  ["Jan", 10],
  ["Feb", 12],
  ["Mar", 20],
  ["Apr", 15],
  ["May", 18],
  ["Jun", 13],
  ["Jul", 12],
  ["Aug", 16],
  ["Sep", 0],
  ["Oct", 0],
  ["Nov", 0],
  ["Dec", 0],
];

const options = {
  chart: {
    title: "Hospital Performance",
    subtitle: "Patient: 2023 to 2024",
  },
};

export default function PatientChart() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Card>
        <div className="p-8 graph">
          {isLoading && (
            <p className="h-[480px] flex items-center justify-center">
              <Code />
            </p>
          )}
          <Chart
            chartType="Bar"
            width="100%"
            height="480px"
            data={data}
            options={options}
            onLoad={() => setIsLoading((prev) => !prev)}
          />
        </div>
      </Card>
    </div>
  );
}