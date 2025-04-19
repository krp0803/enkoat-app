import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
} from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, TimeScale, CategoryScale);

export default function LineChart({ data }) {
  // Build counts per month-year
  const counts = data.reduce((acc, { date }) => {
    const m = new Date(date);
    const label = m.toLocaleString("default", { month: "short", year: "numeric" });
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});

  // Sort labels chronologically
  const sorted = Object.entries(counts)
    .map(([label, count]) => ({ date: new Date(label), label, count }))
    .sort((a, b) => a.date - b.date);

  // Extract and then reverse so newest is on left
  const labels = sorted.map((d) => d.label).reverse();
  const values = sorted.map((d) => d.count).reverse();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Monthly Project Trend</h3>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Projects",
              data: values,
              fill: false,
              borderColor: "#10B981",
            },
          ],
        }}
        options={{
          scales: {
            x: { reverse: true },
            y: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
}