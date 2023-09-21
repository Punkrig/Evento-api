const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
/* Db connection */
const conn =require("./db/conn");
conn();

/* Routes */
const routes = require("./routes/router");
app.use('/api',routes);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});