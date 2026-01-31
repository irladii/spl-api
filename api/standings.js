export default async function handler(req, res) {
  const { group } = req.query;

  const url = "https://raw.githubusercontent.com/irladii/spl-api/main/data/standings.json";
  const r = await fetch(url);
  const data = await r.json();

  res.status(200).json(data[group] || []);
}
