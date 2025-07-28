import express from 'express';

const app = express();

const port = 4000;

app.get('/', (req, res) => {
  res.send("Your server is Ready");
})
app.get('/app/jocks', (req, res) => {
  const jock = [
    {
      id: 1,
      title: "this is a First jock",
      description: "this is a First jock description"
    },
    {
      id: 2,
      title: "this is a Second jock",
      description: "this is a Second jock description"
    },
    {
      id: 3,
      title: "this is a Third jock",
      description: "this is a Third jock description"
    }
  ]
  res.send(jock);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

