export default async function handler(req, res) {
    const { formID } = req.query;
  
    const apiKey = process.env.JOTFORM_API_KEY;
    if (!formID || !apiKey) {
      return res.status(400).json({ error: "Faltam parâmetros obrigatórios" });
    }
  
    try {
      const url = `https://eu-api.jotform.com/form/${formID}/submissions?apiKey=${apiKey}&limit=1000`;
      const response = await fetch(url);
      const data = await response.json();
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json(data);
    } catch (err) {
      console.error("Erro no proxy:", err);
      res.status(500).json({ error: "Erro ao consultar a API da Jotform" });
    }
  }