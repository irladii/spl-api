let data = {
  A: [],
  B: [],
  C: [],
  D: []
};

export default function handler(req, res) {
  const { group } = req.query;
  res.json(data[group] || []);
}
