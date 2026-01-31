export default async function handler(req, res) {
  // CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { group } = req.query;

  const url = "https://raw.githubusercontent.com/irladii/spl-api/main/data/standings.json";
  const r = await fetch(url);
  const data = await r.json();

  res.status(200).json(data[group] || []);
}
