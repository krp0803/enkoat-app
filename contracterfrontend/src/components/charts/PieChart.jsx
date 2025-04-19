import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

export default function PieChart({ data }) {
  const typeCounts = data.reduce((acc, curr) => {
    acc[curr.roofType] = (acc[curr.roofType] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Projects by Roof Type</h3>
      <Pie
        data={{
          labels: Object.keys(typeCounts),
          datasets: [
            {
              label: "Projects",
              data: Object.values(typeCounts),
              backgroundColor: ["#3B82F6", "#EF4444", "#F59E0B", "#10B981"],
            },
          ],
        }}
      />
    </div>
  );
}
