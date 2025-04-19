import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

export default function BarChart({ data }) {
  const stateCounts = data.reduce((acc, curr) => {
    acc[curr.state] = (acc[curr.state] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Projects by State</h3>
      <Bar
        data={{
          labels: Object.keys(stateCounts),
          datasets: [
            {
              label: "Projects",
              data: Object.values(stateCounts),
              backgroundColor: "#3B82F6",
            },
          ],
        }}
      />
    </div>
  );
}
