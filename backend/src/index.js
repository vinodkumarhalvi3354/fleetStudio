const express = require('express');
const cors = require('cors'); 
const app = express();
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();


app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
