const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/headlines', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: '334fcd3ac55c461187cfcf595a791931',
        pageSize: 5
      }
    });

    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching headlines:', error);
    res.status(500).json({ error: 'Failed to fetch headlines' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});