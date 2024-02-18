import express, { Request, Response } from 'express';
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/yelp', async (req: Request, res: Response) => {
    const apiKey: string = 'Vy0xKItRP_qjFgW4JnvWVhrdHnW9-mwpP0ou6NnCVjtJ_B0lurvfDoPzsL54mfwyCNCpDf4zlyZWLagEFKDSLdHVaR-sTz6P-Wujt6zTnq6c_VDw9a5ijpsDMcPQZXYx'; // Ensure you use your API key securely
    const userLocation: string = req.body.location;
    const url: string = `https://api.yelp.com/v3/businesses/search?location=${userLocation}&price=${req.body.price}`;

    try {
        const yelpResponse = await fetch(url, {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'content-type': 'application/json',
            },
        });
        if (!yelpResponse.ok) throw new Error('Yelp API response was not ok.');
        const data = await yelpResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));