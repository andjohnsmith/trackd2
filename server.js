const express = require('express');

const app = express();

app.get('/api/lists', (req, res) => {
  const lists = [
    { id: 1, name: 'Quarantine Mix' },
    { id: 2, name: 'Best of Pavement' },
    { id: 3, name: 'Workout Songs' },
  ];

  res.json(lists);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
