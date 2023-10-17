const Metaphor = require('metaphor-node');
const express = require('express');
const cors = require('cors'); // Enable CORS support

const metaphor = new Metaphor("2b3d5e41-fd64-438a-9c30-c3e3febcbe96"); // TO DO: Create ENV
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for your extension

app.get('/search', async (req, res) => {
  const { query } = req.query;
  
  try {
    const options = {
        numResults: 5
    };
    const searchResults = await metaphor.search(query, options);
    res.json(searchResults);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
