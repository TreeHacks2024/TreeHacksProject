import express, { Request, Response } from 'express';
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/yelp', async (req: Request, res: Response) => {
  const apiKey: string = 'Vy0xKItRP_qjFgW4JnvWVhrdHnW9-mwpP0ou6NnCVjtJ_B0lurvfDoPzsL54mfwyCNCpDf4zlyZWLagEFKDSLdHVaR-sTz6P-Wujt6zTnq6c_VDw9a5ijpsDMcPQZXYx';
  const url: string = 'https://api.yelp.com/v3/businesses/search?location=SanFrancisco';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Network response was not ok.');

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));