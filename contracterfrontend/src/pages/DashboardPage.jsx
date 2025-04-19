import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { getQuotes } from "../services/api";

export default function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getQuotes().then(setData);
  }, []);

  return <Dashboard data={data} />;
}