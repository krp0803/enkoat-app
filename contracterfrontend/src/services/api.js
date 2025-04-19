export async function getQuotes() {
    const res = await fetch("http://localhost:5000/api/quotes");
    const data = await res.json();
    return data;
  }