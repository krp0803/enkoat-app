import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

export default function AvgRoofSizeChart({ data }) {
  // compute average roof size per roofType
  const sums = {};
  const counts = {};
  data.forEach(({ roofType, roofSize }) => {
    sums[roofType] = (sums[roofType] || 0) + roofSize;
    counts[roofType] = (counts[roofType] || 0) + 1;
  });
  const avgSizes = Object.keys(sums).reduce((acc, type) => {
    acc[type] = Math.round(sums[type] / counts[type]);
    return acc;
  }, {});

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Avg Roof Size by Type</h3>
      <Bar
        data={{
          labels: Object.keys(avgSizes),
          datasets: [
            {
              label: "Avg size (sq ft)",
              data: Object.values(avgSizes),
              backgroundColor: "#6366F1",
            },
          ],
        }}
        options={{
          scales: { y: { beginAtZero: true } },
          plugins: {
            tooltip: {
              callbacks: { label: ctx => `${ctx.parsed.y} sq ft` },
            },
          },
        }}
      />
    </div>
  );
}