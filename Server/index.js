const express = require('express');
const cors = require('cors');
const app = express();
const bookRoute = require("./Book/routes/bookRoute")
const authorRoute = require("./Author/routes/authorRoute")
const port = 3000;

app.get('/health', (req, res) => {
    res.send('Hello World!');
    }
);
app.use(cors())
app.use(express.json());
app.use('/books', bookRoute);
app.use('/authors', authorRoute);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

