export default async function handler(req, res) {
    const { formID } = req.query;
    const apiKey = process.env.JOTFORM_API_KEY;
  
    const response = await fetch(`https://eu-api.jotform.com/form/${formID}/submissions?apiKey=${apiKey}&limit=1000`);
    const data = await response.json();
  
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  }  