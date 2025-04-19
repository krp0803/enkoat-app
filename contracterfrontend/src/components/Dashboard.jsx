import React from "react";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import AvgRoofSizeChart from "./charts/AvgRoofSizeChart";

export default function Dashboard({ data }) {
  // Summary metrics
  const totalProjects = data.length;
  const avgRoofSize =
    data.reduce((sum, p) => sum + p.roofSize, 0) / totalProjects || 0;

  // energy‐savings factor per roofType
  const savingsFactors = { Metal: 0.1, TPO: 0.15, Foam: 0.2, Other: 0.05 };
  const avgEnergySavings =
    data.reduce(
      (sum, p) => sum + p.roofSize * (savingsFactors[p.roofType] || 0),
      0
    ) /
      totalProjects || 0;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Performance Dashboard</h2>

      {/* Summary section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="text-gray-600">Total Projects</h4>
          <p className="text-3xl font-semibold">{totalProjects}</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="text-gray-600">Avg Roof Size</h4>
          <p className="text-3xl font-semibold">
            {Math.round(avgRoofSize)} sq ft
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h4 className="text-gray-600">Avg Estimated Energy Savings</h4>
          <p className="text-3xl font-semibold">
            {Math.round(avgEnergySavings)} units
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChart data={data} />
        <AvgRoofSizeChart data={data} />
        <PieChart data={data} />
        <LineChart data={data} />
      </div>
    </div>
  );
}